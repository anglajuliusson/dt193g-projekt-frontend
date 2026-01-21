<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import ProductsTable from '../components/ProductsTable.vue';
    
    const router = useRouter();
    const route = useRoute();

    const products = ref([]); // Reaktiv variabel för alla produkter
    const searchQuery = ref(''); // Sökruta
    const selectedCategory = ref('Alla'); // Filterkategori
    const categories = ref(['Alla']); // Alla tillgängliga kategorier
    
    // Hämta produkter från backend
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");
    
      const res = await fetch("http://localhost:3000/products", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
    
      if (res.status === 401) {
        alert("Ej auktoriserad, logga in igen");
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }
    
      const data = await res.json();
      products.value = data;
    
      // Hämta alla kategorier
      const allCategories = Array.from(new Set(data.map(p => p.category)));
      categories.value = ['Alla', ...allCategories];

      // Om kategori skickats via URL (?category=...)
      if (route.query.category) {
        selectedCategory.value = route.query.category;
      }
    };

    
    // Filtrera produkter baserat på sökning och kategori
    const filteredProducts = computed(() => {
      return products.value.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = selectedCategory.value === 'Alla' || p.category === selectedCategory.value;
        return matchesSearch && matchesCategory;
      });
    });
    
    // Navigera till AddProductView
    const goToAddProduct = () => router.push('/add-product');
    
    // Navigera till UpdateProductView
    const goToUpdateProduct = (id) => {
      router.push(`/update-product/${id}`);
    };
    
    // Ta bort produkt
    const deleteProduct = async (id) => {
      if (!confirm("Är du säker på att du vill ta bort produkten?")) return;
    
      const token = localStorage.getItem('token');
    
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    
      if (res.ok) {
        // Ta bort produkten från den lokala listan
        products.value = products.value.filter(p => p.id !== id);
      } else {
        const data = await res.json();
        alert("Fel vid borttagning: " + data.error);
      }
    };
    
    // Kör fetchProducts när komponenten laddas
    onMounted(() => {
      fetchProducts();
    });
    </script>
    
    
<template>
    <main class="section">
        <div class="container">
          <h1 class="title has-text-centered">Produkter</h1>
          <div class="field is-grouped is-grouped-multiline is-justify-content-center mb-5">
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="searchQuery"
                placeholder="Sök produkter..."
              />
            </div>
            <div class="control">
              <div class="select">
                <select v-model="selectedCategory">
                  <option v-for="cat in categories" :key="cat">{{ cat }}</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button
                class="button"
                style="background-color: #B87333; color: #3e3e3e;"
                @click="goToAddProduct"
              >
                Lägg till ny produkt
              </button>
            </div>
          </div>
          <div class="mb-5">
            <ProductsTable
              :products="filteredProducts"
              @edit="goToUpdateProduct"
              @delete="deleteProduct"
            />
          </div>
        </div>
    </main>
</template>  

<style scoped></style>    
<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import ProductsTable from '../components/ProductsTable.vue';
    
    const products = ref([]); // Reaktiv variabel för alla produkter
    const router = useRouter();
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
    <main>
        <h1>Produkter</h1>
        <div class="controls">
            <input type="text" v-model="searchQuery" placeholder="Sök produkter..." />
            <div class="category-group">
            <label>Kategorier:</label>
            <select v-model="selectedCategory">
                <option v-for="cat in categories" :key="cat">{{ cat }}</option>
            </select>
            </div>
            <button @click="goToAddProduct">Lägg till ny produkt</button>
        </div>
        <div class="table">
        <ProductsTable 
        :products="filteredProducts"
        @edit="goToUpdateProduct"
        @delete="deleteProduct"
        />
        </div>
    </main>
</template>

<style scoped>
    main {
        text-align: center;
        margin-top: 2em;
    }
    .controls {
        margin: 2em;
        display: flex;
        gap: 2em;
        justify-content: center;
    }
    .category-group {
    display: flex;
    align-items: center;
    gap: 0.5em;
    }
    button {
        background-color: #B87333;
        color: #3e3e3e;
        border-radius: 5px;
        border: none;
        padding: 5px;
    }
    select, input {
        border-radius: 5px;
        padding: 5px;
        border: 1px solid #ccc;
    }
    @media (max-width: 768px) {
        .controls {
            display: block;
            margin-bottom: 2em;
        }
        .controls input, .controls button, .category-group {
            margin-bottom: 1.5em;
            justify-content: center;
        }
    }
</style>    
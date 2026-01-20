<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import CategoryTable from '../components/CategoryTable.vue';
    
    const router = useRouter();
    const categories = ref([]);
    
    const fetchCategories = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:3000/categories', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        categories.value = await res.json();
      } else {
        alert('Kunde inte hämta kategorier');
      }
    };

    const goToCategoryProducts = (categoryId) => {
      // Antag att ProductsView kan filtreras via query-param
      router.push({ path: '/products', query: { category: categoryId } });
    };
    
    // Navigera till update-category
    const goToUpdateCategory = (id) => router.push(`/update-category/${id}`);
    
    // Ta bort kategori
    const deleteCategory = async (id) => {
      if (!confirm('Är du säker på att du vill ta bort kategorin?')) return;
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:3000/categories/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        categories.value = categories.value.filter(c => c.id !== id);
      } else {
        const data = await res.json();
        alert('Fel vid borttagning: ' + data.error);
      }
    };
    
    onMounted(fetchCategories);
</script>
    
<template>
    <main>
        <h1>Kategorier</h1>
        <button @click="router.push('/add-category')">Lägg till kategori</button>
        <CategoryTable 
          :categories="categories"
          @view-products="goToCategoryProducts"
          @edit="goToUpdateCategory"
          @delete="deleteCategory"
        />
    </main>
</template>
  
<style scoped>
    main {
        text-align: center;
        margin-top: 2em;
        margin-bottom: 3em;
    }
    button {
        background-color: rgb(184, 115, 51);
        color: #3E3E3E;
        border: none;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        margin: 2em;
    }
    button:hover {
        background-color: rgb(152, 95, 42);
    }
</style>
<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import CategoryFrom from '../components/UpdateCategoryForm.vue';
    
    // Hämta route och router för navigering
    const route = useRoute();
    const router = useRouter();

    // Hämta produktens ID från route-parametern
    const categoryId = route.params.id;

    // Reaktiv variabel för produktdata
    const category = ref({});
    
    // Funktion för att hämta produktdata från backend
    const fetchCategory = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:3000/categories/${categoryId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        const data = await res.json();
        // Backend returnerar en array
        category.value = data[0];
      } else {
        alert('Kunde inte hämta produkten');
        router.push('/categories');
      }
    };

    // Hantera formulärsubmit från ProductForm
    const handleSubmit = async (formData) => {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:3000/categories/${categoryId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
    
      if (res.ok) {
        router.push('/categories'); // Navigera tillbaka efter uppdatering
      } else {
        const data = await res.json();
        alert("Fel vid uppdatering: " + data.error);
      }
    };
    
    // Hämta produktdata direkt när komponenten monteras
    onMounted(fetchCategory);
</script>
    
<template>
    <main>
        <h1>Uppdatera kategori</h1>
        <CategoryFrom 
        v-if="category && Object.keys(category).length"
        :category="category" 
        @submit="handleSubmit" 
        />
    </main>
</template>    
  
<style scoped>
    main {
        text-align: center;
        margin-top: 2em;
        margin-bottom: 3em;
    }
</style>
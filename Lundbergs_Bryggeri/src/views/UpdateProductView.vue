<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import ProductForm from '../components/UpdateProductForm.vue';
    
    // Hämta route och router för navigering
    const route = useRoute();
    const router = useRouter();

    // Hämta produktens ID från route-parametern
    const productId = route.params.id;

    // Reaktiv variabel för produktdata
    const product = ref({});
    
    // Funktion för att hämta produktdata från backend
    const fetchProduct = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:3000/products/${productId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        const data = await res.json();
        // Backend returnerar en array
        product.value = data[0];
      } else {
        alert('Kunde inte hämta produkten');
        router.push('/products');
      }
    };

    // Hantera formulärsubmit från ProductForm
    const handleSubmit = async (formData) => {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
    
      if (res.ok) {
        router.push('/products'); // Navigera tillbaka efter uppdatering
      } else {
        const data = await res.json();
        alert("Fel vid uppdatering: " + data.error);
      }
    };
    
    // Hämta produktdata direkt när komponenten monteras
    onMounted(fetchProduct);
</script>
    
<template>
    <main>
        <h1>Uppdatera produkt</h1>
        <ProductForm 
        v-if="product && Object.keys(product).length"
        :product="product" 
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
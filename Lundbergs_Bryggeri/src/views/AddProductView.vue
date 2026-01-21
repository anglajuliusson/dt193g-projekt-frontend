<script setup>
    import { useRouter } from 'vue-router';
    import ProductForm from '../components/AddProductForm.vue';
    
    // Router används för att nevigera mellan vyer efter lyckat anrop
    const router = useRouter();
    
    // Funktion som tar emot formulärdata från ProductForm-komponenten
    // och skickar ett POST-anrop till backend för att skapa en ny produkt
    const handleSubmit = async (formData) => {
      // Hämtar JWT-token från localStorage för autentisering
      const token = localStorage.getItem('token');
    
      // Skickar POST-anrop till backend med produktdata
      const res = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Token krävs för skyddad endpoint
        },
        body: JSON.stringify(formData)
      });
    
      // Vid lyckat svar navigeras användaren tillbaka till produktlistan
      if (res.ok) {
        router.push('/products');
      } else {
        const data = await res.json();
        alert("Fel vid tillägg: " + data.error);
      }
    };
</script>    
    
<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Lägg till ny produkt</h1>
        <ProductForm @submit="handleSubmit" />
      </div>
    </section>
</template>    
  
<style scoped></style>
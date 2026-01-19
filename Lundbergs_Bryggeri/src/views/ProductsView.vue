<script setup>
    import { ref, onMounted } from 'vue'; // ref för reaktiva variabler
    
    const products = ref([]); // Reaktiv variabel som lagrar produkterna från backend
    
    // Funktion som hämtar produkter från backend
    const fetchProducts = async () => {
      const token = localStorage.getItem("token"); // Hämtar JWT-token från localStorage
    
      // Skickar GET-anrop till backend och skickar med token i Authorization-headern
      const res = await fetch("http://localhost:3000/products", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Backend verifierar tokenen
        }
      });
    
      if (res.status === 401) {
        // Om token är ogiltig eller saknas
        alert("Ej auktoriserad, logga in igen");
        // Om token är ogiltig eller saknas
        localStorage.removeItem("token");
        // Omdirigerar användaren tillbaka till login-sidan
        window.location.href = "/login";
        return;
      }
      // Om anropet lyckas uppdateras products med data från backend
      products.value = await res.json();
    };
    // Kör fetchProducts när komponenten laddas
    onMounted(() => {
      fetchProducts();
    });
</script>
    
<template>
    <main>
        <h1>Produkter</h1>
    </main>
</template>

<style scoped></style>    
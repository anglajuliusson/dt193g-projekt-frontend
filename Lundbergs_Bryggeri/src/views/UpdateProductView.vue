<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const productId = route.params.id; // id som skickades via router.push
    const product = ref({});

    const fetchProduct = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:3000/products/${productId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    product.value = await res.json();
    };

    onMounted(() => {
    fetchProduct();
    });
</script>
  
<template>

</template>
  
<style scoped></style>
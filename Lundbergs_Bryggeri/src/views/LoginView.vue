<script setup>
    import LoginForm from '../components/LoginForm.vue'

</script>
  
<template>
    <main>
        <h1>Lundbergs Bryggeri</h1>
        <h2>Admin login</h2>
        <LoginForm />
    </main>
</template>
  
<style scoped>
    main {
        text-align: center;
        justify-content: center;
        align-items: center;
        color: #3E3E3E;
    }
    h1 {
        margin-top: 3em;
    }
    h2 {
        margin-top: 1em;
    }
</style>
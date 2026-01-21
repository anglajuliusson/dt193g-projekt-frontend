<script setup>
    import LoginForm from '../components/LoginForm.vue'

</script>
  
<template>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2">Lundbergs Bryggeri</h1>
          <h2 class="subtitle is-4 mb-5">Admin login</h2>
          <div class="mx-auto" style="max-width: 400px; padding: 1em;">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
</template>
  
<style scoped></style>
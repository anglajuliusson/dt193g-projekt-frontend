<script setup>
    import { ref } from 'vue';
    
    // Skapar ett custom event som skickar formulärdata till föräldrakomponenten
    const emit = defineEmits(['submit']);
    
    // Reaktivt objekt som lagrar värdena från formuläret
    // Används för att binda inputfält via v-model
    const formData = ref({
      image: '',
      username: '',
      name: '',
      email: '',
      phone: '',
      password: ''
    });
    
    // Körs när formuläret skickas
    // Skickar formData till föräldern via emit
    const submitForm = () => {
      emit('submit', formData.value);
    };
</script>
    
<template>
  <form @submit.prevent="submitForm" class="boxless-form">
    <div class="field">
      <label class="label">Profilbild:</label>
      <div class="control">
        <input class="input" v-model="formData.image" placeholder="Profilbild" />
      </div>
    </div>
    <div class="field">
      <label class="label">Användarnamn:</label>
      <div class="control">
        <input class="input" v-model="formData.username" placeholder="Användarnamn" required />
      </div>
    </div>
    <div class="field">
      <label class="label">Namn:</label>
      <div class="control">
        <input class="input" v-model="formData.name" placeholder="Namn" required />
      </div>
    </div>
    <div class="field">
      <label class="label">E-post:</label>
      <div class="control">
        <input class="input" v-model="formData.email" placeholder="E-post" required />
      </div>
    </div>
    <div class="field">
      <label class="label">Telefonnummer:</label>
      <div class="control">
        <input class="input" v-model="formData.phone" placeholder="Telefonnummer" required />
      </div>
    </div>
    <div class="field">
      <label class="label">Lösenord:</label>
      <div class="control">
        <input class="input" v-model="formData.password" placeholder="Lösenord" required />
      </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button type="submit" class="button submit-btn">Lägg till användare</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
  .boxless-form {
    max-width: 400px;
    width: 90%;
    margin: 2em auto 3em auto;
    text-align: left;
  }
  .input {
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .submit-btn {
    background-color: #B87333;
    color: #3e3e3e;
    border-radius: 5px;
    border: none;
  }
  .submit-btn:hover {
    background-color: rgb(152, 95, 42);
  }
</style>
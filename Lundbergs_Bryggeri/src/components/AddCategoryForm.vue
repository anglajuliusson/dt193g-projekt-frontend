<script setup>
    import { ref } from 'vue';
    
    // Skapar ett custom event som skickar formulärdata till föräldrakomponenten
    const emit = defineEmits(['submit']);
    
    // Reaktivt objekt som lagrar värdena från formuläret
    // Används för att binda inputfält via v-model
    const formData = ref({
      name: ''
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
      <label class="label">Namn:</label>
      <div class="control">
        <input class="input" v-model="formData.name" placeholder="Namn" required />
      </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button type="submit" class="button submit-btn">Lägg till kategori</button>
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
    padding: 5px 10px;
  }
  .submit-btn:hover {
    background-color: rgb(152, 95, 42);
  }
</style>
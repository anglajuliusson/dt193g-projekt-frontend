<script setup>
    import { ref } from 'vue';
    
    // Skapar ett custom event som skickar formulärdata till föräldrakomponenten
    const emit = defineEmits(['submit']);
    
    // Reaktivt objekt som lagrar värdena från formuläret
    // Används för att binda inputfält via v-model
    const formData = ref({
      image: '',
      article_number: '',
      name: '',
      description: '',
      category: '',
      price: '',
      stock_quantity: '',
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
      <label class="label">Produktbild:</label>
      <div class="control">
        <input class="input" v-model="formData.image" placeholder="Bild-URL" />
      </div>
    </div>
    <div class="field">
      <label class="label">Artikelnummer:</label>
      <div class="control">
        <input class="input" v-model="formData.article_number" placeholder="Artikelnummer" required />
      </div>
    </div>
    <div class="field">
      <label class="label">Namn:</label>
      <div class="control">
        <input class="input" v-model="formData.name" placeholder="Namn" required />
      </div>
    </div>
    <div class="field">
      <label class="label">Beskrivning:</label>
      <div class="control">
        <textarea class="textarea" v-model="formData.description" placeholder="Beskrivning"></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Kategori:</label>
      <div class="control">
        <input class="input" v-model="formData.category" placeholder="Kategori" required />
      </div>
    </div>
    <div class="field">
      <label class="label">Pris (kr):</label>
      <div class="control">
        <input type="number" class="input" v-model="formData.price" placeholder="Pris" required />
      </div>
    </div>
    <div class="field">
      <label class="label">Lagersaldo:</label>
      <div class="control">
        <input type="number" class="input" v-model="formData.stock_quantity" placeholder="Lagersaldo" required />
      </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button type="submit" class="button submit-btn">Lägg till produkt</button>
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
  .input, .textarea {
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
<script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    product: { type: Object, required: true }
  });
  
  const emit = defineEmits(['submit']);
  
  const formData = ref({
      image: '',
      article_number: '',
      name: '',
      description: '',
      category: '',
      price: '',
      stock_quantity: '',
  });
  
  // Fyll formData direkt när props.product ändras
  watch(
  () => props.product,
  (newVal) => {
    if (newVal && Object.keys(newVal).length) {
      formData.value = {
        image: newVal.image ?? '',
        article_number: newVal.article_number ?? '',
        name: newVal.name ?? '',
        description: newVal.description ?? '',
        category: newVal.category ?? '',
        price: newVal.price ?? '',
        stock_quantity: newVal.stock_quantity ?? ''
      };
    }
  },
  { immediate: true }
);
  
  const submitForm = () => {
    emit('submit', formData.value);
  };
  </script>
  
<template>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="field">
        <label class="label">Produktbild:</label>
        <div class="control">
          <input class="input" type="text" v-model="formData.image" placeholder="Bild-URL" />
        </div>
      </div>
      <div class="field">
        <label class="label">Artikelnummer:</label>
        <div class="control">
          <input class="input" type="text" v-model="formData.article_number" placeholder="Artikelnummer" required />
        </div>
      </div>
      <div class="field">
        <label class="label">Namn:</label>
        <div class="control">
          <input class="input" type="text" v-model="formData.name" placeholder="Namn" required />
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
          <input class="input" type="text" v-model="formData.category" placeholder="Kategori" required />
        </div>
      </div>
      <div class="field">
        <label class="label">Pris (kr):</label>
        <div class="control">
          <input class="input" type="number" v-model="formData.price" placeholder="Pris" required />
        </div>
      </div>
      <div class="field">
        <label class="label">Lagersaldo:</label>
        <div class="control">
          <input class="input" type="number" v-model="formData.stock_quantity" placeholder="Lagersaldo" required />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-medium has-background-brown has-text-dark" type="submit">
            Spara ändringar
          </button>
        </div>
      </div>
    </form>
</template>
  
<style scoped>
    .form-container {
      max-width: 400px;
      width: 90%;
      margin: 2em auto;
      text-align: left;
    }
    .has-background-brown {
      background-color: rgb(184, 115, 51);
    }
    .has-background-brown:hover {
      background-color: rgb(152, 95, 42);
    }
</style>  
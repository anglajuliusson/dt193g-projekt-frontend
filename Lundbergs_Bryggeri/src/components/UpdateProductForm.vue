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
    <div class="input-group">
      <label>Produktbild:</label>
      <input v-model="formData.image" placeholder="Bild-URL" />
    </div>
    <div class="input-group">
      <label>Artikelnummer:</label>
      <input v-model="formData.article_number" placeholder="Artikelnummer" required />
    </div>
    <div class="input-group">
      <label>Namn:</label>
      <input v-model="formData.name" placeholder="Namn" required />
    </div>
    <div class="input-group">
      <label>Beskrivning:</label>
      <textarea v-model="formData.description" placeholder="Beskrivning"></textarea>
    </div>
    <div class="input-group">
      <label>Kategori:</label>
      <input v-model="formData.category" placeholder="Kategori" required />
    </div>
    <div class="input-group">
      <label>Pris (kr):</label>
      <input type="number" v-model="formData.price" placeholder="Pris" required />
    </div>
    <div class="input-group">
      <label>Lagersaldo:</label>
      <input type="number" v-model="formData.stock_quantity" placeholder="Lagersaldo" required />
    </div>
    <button type="submit">Spara ändringar</button>
  </form>
</template>
   
<style scoped>
    .form-container {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        width: 90%;
        margin: 0 auto;
        text-align: left;
        margin-top: 2em;
    }
    .input-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5em;
    }
    label {
        margin-bottom: 0.5em;
    }
    input, textarea {
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    button {
        background-color: #B87333;
        color: #3e3e3e;
        border-radius: 5px;
        border: none;
        padding: 5px;
        margin-bottom: 3em;
    }
</style>
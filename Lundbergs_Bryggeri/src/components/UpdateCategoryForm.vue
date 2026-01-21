<script setup>
    import { ref, watch } from 'vue';
    
    const props = defineProps({
      category: { type: Object, required: true }
    });
    
    const emit = defineEmits(['submit']);
    
    const formData = ref({
        name: ''
    });
    
    // Fyll formData direkt när props.product ändras
    watch(
    () => props.category,
    (newVal) => {
      if (newVal && Object.keys(newVal).length) {
        formData.value = {
          name: newVal.name ?? ''
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
        <label class="label">Namn:</label>
        <div class="control">
          <input class="input" v-model="formData.name" placeholder="Namn" required />
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
      }
      .has-background-brown {
        background-color: rgb(184, 115, 51);
      }
      .has-background-brown:hover {
        background-color: rgb(152, 95, 42);
      }
  </style>
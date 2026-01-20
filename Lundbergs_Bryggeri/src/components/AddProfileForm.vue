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
      <form @submit.prevent="submitForm" class="form-container">
        <div class="input-group">
          <label>Profilbild:</label>
          <input v-model="formData.image" placeholder="Profilbild" />
        </div>
        <div class="input-group">
          <label>Användarnamn:</label>
          <input v-model="formData.username" placeholder="Användaramn" required />
        </div>
        <div class="input-group">
          <label>Namn:</label>
          <input v-model="formData.name" placeholder="Namn" required />
        </div>
        <div class="input-group">
          <label>E-post:</label>
          <input v-model="formData.email" placeholder="E-post" required />
        </div>
        <div class="input-group">
          <label>Telefonnummer:</label>
          <input v-model="formData.phone" placeholder="Telefonnummer" required />
        </div>
        <div class="input-group">
          <label>Lösenord:</label>
          <input v-model="formData.password" placeholder="Lösenord" required />
        </div>
        <button type="submit">Lägg till användare</button>
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
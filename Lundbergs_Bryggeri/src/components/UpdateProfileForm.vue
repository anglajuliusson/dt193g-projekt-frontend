<script setup>
    import { ref, watch } from 'vue';
    
    const props = defineProps({
      profile: { type: Object, required: true }
    });
    
    const emit = defineEmits(['submit']);
    
    const formData = ref({
        image: '',
        username: '',
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    
    // Fyll formData direkt när props.product ändras
    watch(
    () => props.profile,
    (newVal) => {
      if (newVal && Object.keys(newVal).length) {
        formData.value = {
          image: newVal.image ?? '',
          username: newVal.username ?? '',
          name: newVal.name ?? '',
          email: newVal.email ?? '',
          phone: newVal.phone ?? '',
          password: newVal.password ?? ''
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
            <label class="label">Profilbild:</label>
            <div class="control">
              <input class="input" type="text" v-model="formData.image" placeholder="Profilbild" />
            </div>
          </div>
      
          <div class="field">
            <label class="label">Användarnamn:</label>
            <div class="control">
              <input class="input" type="text" v-model="formData.username" placeholder="Användarnamn" required />
            </div>
          </div>
      
          <div class="field">
            <label class="label">Namn:</label>
            <div class="control">
              <input class="input" type="text" v-model="formData.name" placeholder="Namn" required />
            </div>
          </div>
      
          <div class="field">
            <label class="label">E-post:</label>
            <div class="control">
              <input class="input" type="email" v-model="formData.email" placeholder="E-post" required />
            </div>
          </div>
      
          <div class="field">
            <label class="label">Telefonnummer:</label>
            <div class="control">
              <input class="input" type="text" v-model="formData.phone" placeholder="Telefonnummer" required />
            </div>
          </div>
      
          <div class="field">
            <label class="label">Lösenord:</label>
            <div class="control">
              <input class="input" type="password" v-model="formData.password" placeholder="Lösenord" required />
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
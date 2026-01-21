<script setup>
import { ref } from 'vue'; // Skapaar reaktiva variabler
import { useRouter } from 'vue-router'; // Navigera programatiskt mellan vyer

const router = useRouter(); // Router-instans som används för att navigera efter inloggning
// Reaktiva variabler för att binda användarnamn och lösenord till input-fälten
const username = ref('');
const password = ref('');

// Funktion som körs när användaren skickar in login-formuläret
const login = async (e) => {
  e.preventDefault(); // Förhindra page reload

  // Skickar ett POST anrop till backend med användarnamn och lösenord
  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // JSON används som dataformat
    body: JSON.stringify({
      username: username.value, // Tar värdet från input-fältet
      password: password.value
    })
  });

  // Tolkar svaret från backend som JSON
  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token); // Spara JWT
    localStorage.setItem("user", JSON.stringify(data.user));

    router.push("/products"); // Navigera till produkt-sidan
  } else {
    alert("Felaktigt användarnamn eller lösenord");
  }
};
</script>
  
<template>
    <div class="login">
      <form @submit="login" class="field is-flex is-flex-direction-column is-align-items-center">
        <div class="field mb-4" style="width: 90%; max-width: 300px;">
          <label class="label has-text-left">Användarnamn:</label>
          <div class="control">
            <input class="input" type="text" v-model="username" required />
          </div>
        </div>
        <div class="field mb-4" style="width: 90%; max-width: 300px;">
          <label class="label has-text-left">Lösenord:</label>
          <div class="control">
            <input class="input" type="password" v-model="password" required />
          </div>
        </div>
        <div class="field" style="width: 90%; max-width: 200px;">
          <div class="control">
            <button type="submit" class="button is-medium has-background-brown has-text-dark is-fullwidth">
              Logga in
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
<style scoped>
    .login {
    margin-top: 3em;
    }

    .has-background-brown {
    background-color: #B87333;
    }
    .has-background-brown:hover {
    background-color: #A1612B;
    }
</style>
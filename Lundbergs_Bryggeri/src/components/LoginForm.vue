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
        <form @submit="login">
            <label>Användarnamn:</label>
            <input type="text" v-model="username" required></input>
            <label>Lösenord:</label>
            <input type="password" v-model="password" required></input>
            <button type="submit">Logga in</button>
        </form>
    </div>
</template>
  
<style scoped>
    .login {
        margin: auto;
        margin-top: 3em;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    input, label {
        text-align: left;
        max-width: 300px;
        width: 90%;
        margin: auto;
    }
    input {
        margin-bottom: 1.5em;
        margin-top: 0.5em;
    }
    button {
        background-color: #B87333;
        color: #3E3E3E;
        padding: 5px 10px 5px 10px;
        border-radius: 5px;
        border: solid #B87333;
        max-width: 200px;
        margin: auto;
    }
    @media (min-width: 768px) {
        label, button {
            font-size: large;
        }
    }
</style>
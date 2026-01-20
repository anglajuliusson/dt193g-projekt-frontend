<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const user = ref(null);
    
    // Hämta inloggad användares profil
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
    
      const res = await fetch('http://localhost:3000/staff', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    
      if (res.ok) {
        const data = await res.json();
        user.value = Array.isArray(data) ? data[0] : data;
      } else {
        alert('Kunde inte hämta profilinformation');
        router.push('/login');
      }
    };
    
    onMounted(fetchProfile);
</script>
  
<template>
    <main v-if="user" class="profile-container">
      <h1>Min profil</h1>

      <img 
        v-if="user.image"
        :src="user.image"
        alt="Profilbild"
        class="profile-image"
      />
  
      <div class="profile-info">
        <p><strong>Anställnings-ID:</strong> {{ user.id }}</p>
        <p><strong>Användarnamn:</strong> {{ user.username }}</p>
        <p><strong>Namn:</strong> {{ user.name }}</p>
        <p><strong>E-post:</strong> {{ user.email }}</p>
        <p><strong>Telefon:</strong> {{ user.phone }}</p>
      </div>
      <div class="buttons">
        <button class="update_btn">Redigera profil</button>
        <button class="add_btn">Skapa ny användare</button>
        <button class="logout_btn">Logga ut</button>
      </div>
    </main>
</template>  
  
<style scoped>
    main {
        text-align: center;
        margin-top: 2em;
        margin-bottom: 3em;
    }
    img {
        border-radius: 50%;
        margin: 2em;
        margin-bottom: 3em;
        max-width: 400px;
        width: 90%;
    }
    .profile-info {
        max-width: 300px;
        width: 90%;
        margin: auto;
        text-align: left;
        font-size: large;
        line-height: 1.6;
    }
    .buttons {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 3em !important;
        max-width: 300px;
        width: 90%;
        margin: auto;
    }
    button {
        padding: 5px;
        border: none;
        border-radius: 5px;
    }
    .update_btn {
        background-color: #8B5E3C;
        color: #F9F5F0;
    }
    .add_btn {
        background-color: #B87333;
        color: #3e3e3e;
    }
    .logout_btn {
        background-color: #3e3e3e;
        color: #F9F5F0;
    }
</style>
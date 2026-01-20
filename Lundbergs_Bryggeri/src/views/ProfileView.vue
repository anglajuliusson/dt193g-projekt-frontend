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

    // Navigera till redigera profil
    const goToEditProfile = () => {
      if (!user.value || !user.value.id) return;
      router.push(`/update-profile/${user.value.id}`);
    };


    // Navigera till skapa ny användare
    const goToAddUser = () => {
      router.push('/add-profile'); // Skapa AddUserView separat
    };

    // Logga ut
    const logout = () => {
    if (confirm('Är du säker på att du vill logga ut?')) {
        localStorage.removeItem('token');
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
        <button class="update_btn" @click="goToEditProfile">Redigera profil</button>
        <button class="add_btn" @click="goToAddUser">Skapa ny användare</button>
        <button class="logout_btn" @click="logout">Logga ut</button>
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
        margin-top: 2em;
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
    .update_btn:hover {
        background-color: #714d31;
    }
    .add_btn {
        background-color: #B87333;
        color: #3e3e3e;
    }
    .add_btn:hover {
        background-color: rgb(152, 95, 42);
    }
    .logout_btn {
        background-color: #3e3e3e;
        color: #F9F5F0;
    }
    .logout_btn:hover {
        background-color: #222222;
    }
</style>
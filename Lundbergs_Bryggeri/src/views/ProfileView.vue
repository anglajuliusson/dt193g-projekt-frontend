<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const user = ref(null);
    
    // Hämta inloggad användares profil
    const fetchProfile = () => {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user.value = JSON.parse(storedUser);
    } else {
      router.push('/login'); // ingen user sparad → skicka till login
    }
  };


    // Navigera till redigera profil
    const goToEditProfile = () => {
      if (!user.value || !user.value.id) return;
      router.push(`/update-profile/${user.value.id}`);
    };


    // Navigera till skapa ny användare
    const goToAddUser = () => {
      router.push('/add-profile');
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
  <section v-if="user" class="section">
    <div class="container has-text-centered">
      <h1 class="title">Min profil</h1>
      <figure class="image is-inline-block mt-5 mb-5" style="width: 400px; height: 400px; margin: auto;">
        <img
          v-if="user.image"
          :src="user.image"
          alt="Profilbild"
          style="border-radius: 50%; width: 90%; height: 100%; object-fit: cover; margin: auto;"
        />
      </figure>
      <div class="mx-auto" style="max-width: 300px; text-align: left; font-size: large; line-height: 1.6;">
        <p><strong>Anställnings-ID:</strong> {{ user.id }}</p>
        <p><strong>Användarnamn:</strong> {{ user.username }}</p>
        <p><strong>Namn:</strong> {{ user.name }}</p>
        <p><strong>E-post:</strong> {{ user.email }}</p>
        <p><strong>Telefon:</strong> {{ user.phone }}</p>
      </div>
      <div class="buttons is-flex is-flex-direction-column is-align-items-center mt-5" style="max-width: 300px; margin: auto;">
        <button
          class="button is-fullwidth mb-2"
          style="background-color: #8B5E3C; color: #F9F5F0;"
          @click="goToEditProfile"
        >
          Redigera profil
        </button>
        <button
          class="button is-fullwidth mb-2"
          style="background-color: #B87333; color: #3e3e3e;"
          @click="goToAddUser"
        >
          Skapa ny användare
        </button>
        <button
          class="button is-fullwidth"
          style="background-color: #3e3e3e; color: #F9F5F0;"
          @click="logout"
        >
          Logga ut
        </button>
      </div>
    </div>
  </section>
</template>

  
<style scoped></style>
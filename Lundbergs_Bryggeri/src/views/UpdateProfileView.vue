<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import ProfileForm from '../components/UpdateProfileForm.vue';
    
    // Hämta route och router för navigering
    const route = useRoute();
    const router = useRouter();

    // Hämta produktens ID från route-parametern
    const staffId = route.params.id;

    // Reaktiv variabel för produktdata
    const profile = ref({});
    
    // Funktion för att hämta produktdata från backend
    const fetchCategory = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:3000/staff/${staffId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        const data = await res.json();
        // Backend returnerar en array
        profile.value = data[0];
      } else {
        alert('Kunde inte hämta användaren');
        router.push('/profile');
      }
    };

    // Hantera formulärsubmit från ProductForm
    const handleSubmit = async (formData) => {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:3000/staff/${staffId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
    
      if (res.ok) {
        router.push('/profile'); // Navigera tillbaka efter uppdatering
      } else {
        const data = await res.json();
        alert("Fel vid uppdatering: " + data.error);
      }
    };
    
    // Hämta produktdata direkt när komponenten monteras
    onMounted(fetchCategory);
</script>
    
<template>
    <main>
        <h1>Redigera profil</h1>
        <ProfileForm 
        v-if="profile && Object.keys(profile).length"
        :profile="profile" 
        @submit="handleSubmit" 
        />
    </main>
</template>    
  
<style scoped>
    main {
        text-align: center;
        margin-top: 2em;
        margin-bottom: 3em;
    }
</style>
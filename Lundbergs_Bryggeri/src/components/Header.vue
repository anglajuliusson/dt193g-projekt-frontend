<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter(); // här får vi tillgång till router
      
  // Logga ut
  const logout = () => {
    if (confirm('Är du säker på att du vill logga ut?')) {
        localStorage.removeItem('token');
        router.push('/login');
    }
    };
</script>

<template>
    <header>
        <div class="menu-and-button">
            <nav id="main-nav">
                <ul>
                    <li><router-link to="/products">Produkter</router-link></li>
                    <li><router-link to="/categories">Kategorier</router-link></li>
                    <li><router-link to="/profile">Min profil</router-link></li>
                </ul>
            </nav>
            <button @click="logout">Logga ut</button>
        </div>
    </header>
</template>
  
<style scoped>
  header {
    width: 100%;
    background-color: #8B5E3C;
    padding: 2em;
    box-sizing: border-box;
  }
  .menu-and-button {
    display: flex;
    align-items: center;
    gap: 1.5rem; /* mellan menyn och knappen */
    justify-content: center; /* centrerar hela gruppen i headern */
    font-size: medium;
  }
  #main-nav ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    padding: 0;
    margin: 0;
  }
  #main-nav ul li a {
    text-decoration: none;
    color: #F9F5F0;
  }
  button {
    padding: 0.5em 1em;
    background-color: #8B5E3C;
    color: #F9F5F0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: medium;
    font-family: monospace;
  }
  /* Desktop */
  @media (min-width: 768px) {
  .menu-and-button {
     justify-content: center; /* kan ändras till flex-start om du vill vänsterjustera */
     gap: 1.5rem; /* mellan menyn och knappen */
     font-size: large;
  }
  #main-nav ul {
     gap: 3rem;
  }
  button {
    font-size: large;
  }
  }
</style>
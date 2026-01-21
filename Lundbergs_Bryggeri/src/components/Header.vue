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
  <nav class="navbar is-brown" role="navigation">
    <div class="container is-fluid has-text-centered">
      <div class="navbar-brand"></div>
      <div class="navbar-menu is-active">
        <div class="navbar-start is-centered">
          <router-link class="navbar-item no-bg" to="/products">Produkter</router-link>
          <router-link class="navbar-item no-bg" to="/categories">Kategorier</router-link>
          <router-link class="navbar-item no-bg" to="/profile">Min profil</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <button class="button logout-btn" @click="logout">Logga ut</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar.is-brown {
    background-color: #8B5E3C;
    padding: 2em;
  }
  .navbar-item.no-bg {
    background-color: transparent !important;
    color: #F9F5F0;
    font-family: monospace;
    font-size: medium;
  }
  .logout-btn {
    background-color: #8B5E3C;
    color: #F9F5F0;
    border: none;
    border-radius: 5px;
    font-family: monospace;
    font-size: medium;
    padding: 0.5em 1em;
    cursor: pointer;
  }
  .logout-btn:hover {
    background-color: #714d31;
  }
  .navbar-menu {
    background-color: #8B5E3C;
  }
  /* Desktop */
  @media (min-width: 768px) {
    .navbar-item.no-bg {
      font-size: large;
    }
    .logout-btn {
      font-size: large;
    }
    .navbar-start.is-centered {
      justify-content: center;
      gap: 3rem;
    }
  }
</style>
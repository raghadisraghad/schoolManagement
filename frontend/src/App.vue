<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { computed } from 'vue';
import './assets/tailwind.css';

interface UserInfo {
  role: number;
}

const userInfo = ref<UserInfo | null>(null);

onMounted(() => {
  const storedUserInfo = sessionStorage.getItem('userInfo');
  if (storedUserInfo) {
    userInfo.value = JSON.parse(storedUserInfo);
  }
});

// const isAdmin = computed(() => userInfo.value && userInfo.value.role === 1);
const isAdmin = userInfo.value;
const logout = () => {
  sessionStorage.removeItem('userInfo');
  sessionStorage.removeItem('userToken');
  window.location.href = '/';
}
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="!userInfo" to="/office">Office</RouterLink>
        <RouterLink v-if="!userInfo" to="/myPage">My Page</RouterLink>
        <RouterLink v-if="!isAdmin" to="/dashboard">Dashboard</RouterLink>
        <RouterLink v-if="!isAdmin" to="/request">Request</RouterLink>
        <RouterLink v-if="!userInfo" to="/profile">Profile</RouterLink>
        <RouterLink v-if="!userInfo" to="/auth">Sign Up</RouterLink>
        <RouterLink v-if="userInfo" to="/" @click="logout">Logout</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer></footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

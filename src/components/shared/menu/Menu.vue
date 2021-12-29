<template>
  <nav>
    <ul>
      <!-- <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/cadastro">Cadastro</router-link></li> -->
      <li
        v-for="route in routes"
        v-bind:key="route.title"
      >
        <router-link v-bind:to="route.path">
          {{ route.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from '../../../routes';

export default {
  data() {
    return {
      routes: routes.filter((route) => route.menu),
    }
  }
}
</script>

<style scoped>
</style>
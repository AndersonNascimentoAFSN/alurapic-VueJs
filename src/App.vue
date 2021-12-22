<template>
  <div class="c_container">
    <Menu />
    <transition name="page">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import Menu from './components/shared/menu/Menu.vue';

  export default {
    components: {
      Menu,
    },
  }
</script>

<style>
  .c_container {
    font-family: Helvetica,sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .page-enter, .page-leave-active {
    opacity: 0;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity 2s;
  }
</style>

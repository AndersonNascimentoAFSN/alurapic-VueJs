<template>
  <!-- <Title v-text="title" /> -->
  <Title v-bind:title="title" />
</template>

<script>
  import Title from '../shared/title/Title.vue';

  export default {
    components: {
      Title,
    },
    data() {
      return {
        title: 'Cadastro',
      }
    }
  }
</script>

<style scoped>
</style>
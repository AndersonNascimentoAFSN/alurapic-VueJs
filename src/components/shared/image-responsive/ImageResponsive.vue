<template>
  <img :src="url" v-bind:alt="title"/>
</template>

<script>
  export default {
    props: ['url', 'title']
  }
</script>

<style scoped>
  .image-responsive {
    width: 100%;
  }
</style>

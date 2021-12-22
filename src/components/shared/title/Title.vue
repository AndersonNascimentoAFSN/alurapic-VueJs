<template>
  <h1 class="title">{{ title }}</h1>
  <!-- <h1 class="title"></h1> -->
</template>

<script>
export default {

  // props: ['title']
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
  }

</style>
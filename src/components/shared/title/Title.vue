<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {

  props: ['titulo']
}
</script>

<style scoped>
  .title {
    text-align: center;
  }

</style>
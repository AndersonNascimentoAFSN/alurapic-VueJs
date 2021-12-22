<template>
  <div class="c_panel">
    <h2 class="panel__title" v-on:dblclick="visible = !visible">{{ titulo }}</h2>
    <div class="panel__content" v-show="visible">
      <slot name="panel-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titulo'],

  data() {
    return {
      visible: true,
    }
  }
}
</script>

<style scoped>
  .c_panel {
    width: 250px;
  }

  .panel__title {
    text-align: center;
    cursor: pointer;
    background: blue;
    color: white;
    padding: 5px;
  }

</style>

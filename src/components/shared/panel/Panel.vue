<template>
  <div class="c_panel">
    <h2 class="panel__title" v-on:dblclick="visible = !visible">{{ titulo }}</h2>

    <transition name="panel-fade">
      <div class="panel__content" v-show="visible">
        <slot name="panel-content"></slot>
      </div>
    </transition>
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

  .panel-fade-enter, .panel-fade-leave-active {
    opacity: 0;
  }

  .panel-fade-enter-active, .panel-fade-leave-active {
    transition: opacity 2s;
  }

</style>

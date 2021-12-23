<template>
  <button  
    v-on:click="dispatchAction()"
    v-bind:type="type"
    class="btn"
    v-bind:class="styleButton"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    confirm: {
      type: Boolean,
      required: false,
    },
    styleClass: {
      type: String,
      required: false,
    },
  },
  methods: {
    dispatchAction() {
      if(this.confirm) {
        if(confirm('Confirma operação?')) {
          this.$emit('buttonActive', new Date());
        }
        return;
      }
      this.$emit('buttonActive', new Date());
    }
  },

  computed: {
    styleButton() {
      if(this.styleClass === 'default' || !this.styleClass) return 'btn-default';
      if(this.styleClass === 'warning') return 'btn-warning';
    }
  }
}
</script>

<style scoped>
  .btn {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    font-size: 1.2em;
    text-align: center;
  }

  .btn-warning {
    background: firebrick;
    color: white;
  }

  .btn-default {
    background: darkcyan;
    color: white;
  }

</style>
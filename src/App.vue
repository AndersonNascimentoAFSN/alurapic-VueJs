<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-for="photo of photos">
      <img :src="photo.url" v-bind:alt="photo.title"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Alura Pic',
      photos: [
        {
          url: 'https://www.dicaspetz.com.br/wp-content/uploads/2019/06/cachorro-filhote.jpg',
          title: 'Cachorro branco filhote em cima de uma cama',
        },
        {
          url: 'https://cdn.folhape.com.br/upload/dn_arquivo/2019/09/quantas-horas-um-cachorro-dorme.jpg',
          title: 'Cachorro branco filhote em cima de uma cama',
        },
        {
          url: 'https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png',
          title: 'Cachorro branco filhote em cima de uma cama',
        },
      ]
    }
  }
}
</script>

<style>

</style>

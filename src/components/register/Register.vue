<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form v-on:submit.prevent="savePhoto()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input
          id="titulo"
          autocomplete="off"
          v-model.lazy="photo.titulo"
        >
        <!-- v-model substitui as linhas abaixo: -->
        <!-- v-on:input="photo.titulo = $event.target.value" -->
        <!-- v-bind:value="photo.titulo" -->

        <!-- modifier lazy - Utilizado para performance -->
        <span>{{photo.titulo}}</span>
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input
          id="url"
          autocomplete="off"
          v-model.lazy="photo.url"
        >
        <!-- v-on:input="photo.url = $event.target.value"
          v-bind:value="photo.url" -->
        <ImageResponsive />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          id="descricao"
          autocomplete="off"
          v-model.lazy="photo.descricao"
        ></textarea>
        <!-- v-on:input="photo.descricao = $event.target.value"
          v-bind:value="photo.descricao" -->
      </div>

      <div class="centralizado">
        <Button
          label="GRAVAR"
          type="submit"
        />
        <router-link v-bind:to="{ name: 'Home' }"><Button
            label="VOLTAR"
            type="button"
          /></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue'
import Button from '../shared/button/Button.vue';
import Photo from '../../domain/photo/Photo';
import PhotoService from '../../domain/photo/PhotoService';

export default {
  components: {
    ImageResponsive,
    Button,
    Photo,
  },
  data() {
    return {
      // photo: {
      //   titulo: '',
      //   url: '',
      //   descricao: '',
      // }
      photo: new Photo(),
    }
  },
  methods: {
    savePhoto() {
      console.log('enviar dados para a API');
      // this.photo = {
      //   titulo: '',
      //   url: '',
      //   descricao: '',
      // }

      // this.$http.post('v1/fotos', this.photo)
      //   .then(() => this.photo = new Photo(), err => console.error(err))

      // this.resource
      //   .save(this.photo)
      //   .then(() => this.photo = new Photo(), err => console.error(err))

      this.service
        .registerPhoto(this.photo)
        .then(() => this.photo = new Photo(), err => console.error(err))
    }
  },
  created() {
    // this.resource = this.$resource('v1/fotos');
    this.service = new PhotoService(this.$resource)
  }
}

</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>
<template>

  <div>
    <h1
      class="centralizado"
      v-if="!photo._id"
    >Cadastro</h1>

    <h1
      class="centralizado"
      v-else
    >Atualização</h1>

    <h2 class="centralizado">{{ photo.titulo }}</h2>

    <validation-observer v-slot="{ handleSubmit }">
      <!-- <form v-on:submit.prevent="savePhoto()"> -->
      <form v-on:submit.prevent="handleSubmit(savePhoto)">
        <div class="controle">
          <label for="titulo">TÍTULO</label>
          <validation-provider
            rules="required|minmax:3,20"
            :bails="false"
            v-slot="{ errors }"
          >
            <div class="c_error">
              <input
                id="titulo"
                autocomplete="off"
                v-model.lazy="photo.titulo"
                name="titulo"
              >
              <ul>
                <li
                  v-for="error in errors"
                  v-bind:key="error"
                  class="error_item"
                >
                  <span class="erro">{{ error }}</span>
                </li>
              </ul>
            </div>
            <span>{{photo.titulo}}</span>
          </validation-provider>

          <!-- v-model substitui as linhas abaixo: -->
          <!-- v-on:input="photo.titulo = $event.target.value" -->
          <!-- v-bind:value="photo.titulo" -->

          <!-- modifier lazy - Utilizado para performance -->
        </div>

        <div class="controle">
          <label for="url">URL</label>

          <validation-provider
            rules="required"
            v-slot="{ errors }"
          >
            <div class="c_error">
              <input
                id="url"
                autocomplete="off"
                v-model.lazy="photo.url"
              >
              <span class="error_item">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <!-- v-on:input="photo.url = $event.target.value"
          v-bind:value="photo.url" -->
          <ImageResponsive
            v-bind:url="photo.url"
            v-bind:title="photo.titulo"
          />
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
    </validation-observer>
  </div>
</template>

<script>

import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue'
import Button from '../shared/button/Button.vue';
import Photo from '../../domain/photo/Photo';
import PhotoService from '../../domain/photo/PhotoService';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  components: {
    ImageResponsive,
    Button,
    Photo,
    'validation-provider': ValidationProvider,
    'validation-observer': ValidationObserver,
  },
  data() {
    return {
      // photo: {
      //   titulo: '',
      //   url: '',
      //   descricao: '',
      // }
      photo: new Photo(),
      id: this.$route.params.id
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
        .then(() => {
          if (this.id) this.$router.push({ name: 'Home' });
          this.photo = new Photo();
        }, err => console.error(err));
    }
  },
  created() {
    // this.resource = this.$resource('v1/fotos');
    this.service = new PhotoService(this.$resource);
    if (this.id) {
      this.service
        .getPhotoById(this.id)
        .then(photo => this.photo = photo);
    }
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

.c_error {
  display: flex;
  flex-direction: column;
}

.error_item {
  color: red;
}
</style>
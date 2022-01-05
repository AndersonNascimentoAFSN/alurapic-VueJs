<template>
  <div class="c_container">
    <!-- <Title v-text="title" /> -->
    <Title v-bind:title="title" />

    <p
      v-show="message"
      class="message"
    >{{ message }}</p>

    <input
      type="search"
      class="filter"
      v-on:input="filter = $event.target.value"
      placeholder="filtre pelo título da imagem"
    >

    <div class="c_photos__items">
      <div
        v-for="photo of photosFiltered"
        v-bind:key="photo._id"
      >
        <My-panel v-bind:titulo="photo.titulo">
          <div
            slot="panel-content"
            class="panel-content"
          >
            <!-- posso passar um objeto para a diretiva ou um modifiers -->
            <!-- v-transform="{ increment: 30, animation: true }" -->
            <!-- v-transform.animation="30" -->
            <image-responsive
              v-bind:url="photo.url"
              v-bind:title="photo.titulo"
              v-transform:rotate.animation.reverse="30"
            />
            <!-- <Button type="button" label="Remover" v-on:click.native="remove(photo)"/> -->
            <router-link :to="{ name: 'Change', params: { id: photo._id} }">
              <Button
                type="button"
                label="Alterar"
              >
              </Button>
            </router-link>
            <Button
              type="button"
              label="Remover"
              v-on:buttonActive="remove($event, photo)"
              v-bind:confirm="true"
              styleClass="warning"
            />
          </div>
        </My-panel>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from '../shared/panel/Panel.vue';
import Title from '../shared/title/Title.vue';
import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue';
import Button from '../shared/button/Button.vue';
import transform from '../../directives/Transform';
import PhotoService from '../../domain/photo/PhotoService';

export default {
  components: {
    'My-panel': Panel,
    Title: Title,
    'Image-responsive': ImageResponsive,
    ImageResponsive,
    Button,
  },

  directives: {
    transform
  },

  data() {
    return {
      title: 'Alura Pic',
      photos: [],
      filter: '',
      message: '',
    }
  },

  computed: {
    photosFiltered() {
      if (this.filter) {
        const exp = new RegExp(this.filter.trim(), 'i');
        return this.photos.filter((photo) => exp.test(photo.titulo));
      } else {
        return this.photos;
      }
    }
  },

  methods: {
    remove($event, photo) {
      // alert($event);
      // alert('Remover a foto' + photo.titulo);

      // this.$http
      //   .delete(`v1/fotos/${photo._id}`)
      //   .then(() => {
      //     this.message = 'Foto removida com sucesso';
      //     const index = this.photos.indexOf(photo);
      //     this.photos.splice(index, 1);
      //     // this.photos = this.photos.filter((photoArray) => photo._id !== photoArray._id)
      //     console.log(this.photos);
      //   }, err => {
      //     console.error(err);
      //     this.message = 'Não foi possível remover a foto';
      //   });

      // melhorando resource:

      // this.resource.delete({ id: photo._id })
      //   .then(() => {
      //     const index = this.photos.indexOf(photo);
      //     this.photos.splice(index, 1);
      //     this.message = 'Foto removida com sucesso';
      //     // this.photos = this.photos.filter((photoArray) => photo._id !== photoArray._id)
      //     console.log(this.photos);
      //   }, err => {
      //     console.error(err);
      //     this.message = 'Não foi possível remover a foto';
      //   });

      this.service.deletePhoto(photo._id)
        .then(() => {
          const index = this.photos.indexOf(photo);
          this.photos.splice(index, 1);
          this.message = 'Foto removida com sucesso';
          // this.photos = this.photos.filter((photoArray) => photo._id !== photoArray._id)
        }, (err) => this.message = err.message);
    }
  },

  created() {
    //   this.$http.get('v1/fotos')
    //     .then((res) => res.json())
    //     .then((photos) => this.photos = photos, (err) => console.log(err));
    // }

    // melhorando resource:
    // this.resource = this.$resource('v1/fotos{/id}');
    // this.resource
    //   .query()
    //   .then(res => res.json())
    //   .then((photos) => this.photos = photos, err => console.log(err));

    this.service = new PhotoService(this.$resource)
    this.service
      .getPhotos()
      .then((photos) => this.photos = photos, (err) => this.message = err.message);
  }
}
</script>

<style>
.c_container {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.c_photos__items {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  gap: 10px;
  justify-content: center;
}

.c_photos__items img {
  width: 250px;
  height: 250px;
}

.filter {
  display: block;
  width: 100%;
}

.panel-content {
  text-align: center;
}

.message {
  text-align: center;
}
</style>

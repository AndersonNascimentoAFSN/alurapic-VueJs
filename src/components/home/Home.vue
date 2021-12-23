<template>
  <div class="c_container">
      <!-- <Title v-text="title" /> -->
    <Title v-bind:title="title" />

    <input 
      type="search"
      class="filter"
      v-on:input="filter = $event.target.value"
      placeholder="filtre pelo título da imagem"
    >

    <div class="c_photos__items">
      <div v-for="photo of photosFiltered" v-bind:key="photo._id">
        <My-panel v-bind:titulo="photo.titulo">
          <div slot="panel-content" class="panel-content">
            <image-responsive v-bind:url="photo.url" v-bind:title="photo.titulo"/>
            <!-- <Button type="button" label="Remover" v-on:click.native="remove(photo)"/> -->
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

export default {
  components: {
    'My-panel': Panel,
    Title: Title,
    'Image-responsive': ImageResponsive,
    ImageResponsive,
    Button,
  },

  data() {
    return {
      title: 'Alura Pic',
      photos: [],
      filter: '',
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
      alert($event);
      alert('Remover a foto' + photo.titulo);
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then((res) => res.json())
      .then((photos) => this.photos = photos, (err) => console.log(err));
  }
}
</script>

<style>
  .c_container {
    font-family: Helvetica,sans-serif;
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

</style>

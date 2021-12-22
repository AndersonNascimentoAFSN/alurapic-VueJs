<template>
  <div class="c_container">
    <h1 class="title">{{ title }}</h1>
    <div class="c_photos__items">
      <div class="c_panel" v-for="photo of photos" v-bind:key="photo._id">
        <h2 class="panel__title">{{ photo.titulo }}</h2>
        <div class="panel__content">
          <img :src="photo.url" v-bind:alt="photo.titulo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Alura Pic',
      photos: [],
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

  .title {
    text-align: center;
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

  .panel__title {
    text-align: center;
  }

</style>

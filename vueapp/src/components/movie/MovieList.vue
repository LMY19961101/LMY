<template>
  <ul>
      <li v-for="movie in movieList" :key="movie.id">
          <img :src="movie.img" alt="">
      </li>
  </ul>
</template>

<script>
import Axios from "axios"
export default {
  data () {
      return {
          movieList: []
      }
  }, 
  mounted () {
      Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=0" ).then(res => {
          console.log(res);
          this.movieList = res.data.data.movies;
      }).catch(() => {})
  }
}
</script>

<style scoped>

</style>

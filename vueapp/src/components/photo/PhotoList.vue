<template>
  <ul class="list">
      <li v-for="(photo, index) in photoList" :key="index">
          <img :src="photo.src" alt="">
      </li>
  </ul>
</template>

<script>
import Axios from 'axios'
export default {
    data () {
        return {
            photoList: []
        };
    },
  mounted () {
    Axios.get("/static/data/photodata.json").then(res => {
        console.log(res);
        this.photoList = res.data.photoData;
    }).catch(err => {})  
  }
}
</script>

<style scoped>
.list{
    margin: 1rem 0;
}
.list li{
    width: 50%;
    float: left;
}
.list img{
    width: 100%;
}
</style>

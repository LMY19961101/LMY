<template>
    <div class="detail">
        <div class="detail-content">
            <div class="detail-img">
                <img :src="detail.img" alt="">
            </div>
            <div class="detail-info">
                <h4 v-text="detail.nm"></h4>
                <p v-text="detail.sc + '分'"></p>
                <p>{{detail.cat}}</p>
                <p>{{detail.src}}/{{detail.dur}}分钟</p>
                <p>{{detail.rt}}</p>
            </div>
        </div>
        <hr>
        <div>
            <h4>主演</h4>
            <p>{{detail.star}}</p>
        </div> 
        <hr>
        <div>
            <h4>简介</h4>
            <p>{{detail.dra}}</p> 
        </div>   
    </div>
</template>

<script>
import Axios from "axios"
export default {
    data () {
        return {
            detail: {}
        }
    },
  mounted () {
      let url1 = API_PROXY + "http://m.maoyan.com/movie/"
      + this.$route.params.movieId + ".json";
      Axios.get(url1).then(res => {
          console.log(res);
          this.detail = res.data.data.MovieDetailModel;
      }).catch();
  }
}
</script>

<style scoped>
    .detail{
        margin: 1rem 0.2rem;
        padding: 0.2rem 0
    }
    .detail-content{
        display: flex;
    }
    .detail-img{
        flex: 1;
        width: 0;
    }
    .detail-info{
        flex: 2;
        width: 0;
        margin: 0.2rem
    }
    .detail h4{
        font-weight: bolder;
    }
</style>

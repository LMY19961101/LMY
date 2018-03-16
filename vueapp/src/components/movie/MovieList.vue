<template>
<div class="movie-list">
    <ul>
      <li v-for="movie in movieList" :key="movie.id" class="movie">
          <div class="movie-img">
            <img :src="movie.img" alt="">
          </div>
          <div class="movie-info">
              <p class="movie-name">{{movie.nm}}</p>
              <p>{{movie.star}}</p>
              <p>{{movie.ver}}</p>
              <p>{{movie.showInfo}}</p>
              <p class="details">详情>></p>
          </div>
      </li>
    </ul>
    <div class="loading" v-show="loadingShow">
        <img src="../../assets/img/loading.gif" alt="">
    </div>
</div>
  
</template>

<script>
import Axios from "axios"
export default {
  data () {
      return {
          movieList: [],
          loadingShow: true
      }
  }, 
  mounted () {
      let url1 = API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset" + this.movieList.length;
      let url2 = '/vueapp/static/moviedata.json'
      Axios.get(url2).then(res => {
          console.log(res);
        this.loadingShow = false;
        let list = res.data.data.movies;
        this.movieList = list.slice(0, 5);
      }).catch(() => {
          alert('获取数据失败');
      })
  }
}
</script>

<style scoped>
    .movie-list{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .movie{
        display: flex;
        width: 100%;
        padding: 0.2rem;
        border-bottom: solid 1px #ccc
    }
    .movie-img{
        flex-grow: 1;
        width: 0;
        margin-right: 0.2rem
    }
    .movie-info{
        flex-grow: 2;
        width: 0;
    }
    .movie-name{
        font-weight: bolder
    }

    .loading{
        text-align: center
    }

    .details{
        color: #006688
    }

</style>

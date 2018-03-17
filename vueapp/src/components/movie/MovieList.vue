<template>
<div class="movie-list">
    <ul>
      <li @click="goDetail(movie.id)" v-for="movie in movieList" :key="movie.id" class="movie">
          <div class="movie-img">
            <img :src="movie.img" alt="">
          </div>
          <div class="movie-info">
              <p class="movie-name">{{movie.nm}}</p>
              <p>主演：{{movie.star}}</p>
              <p>{{movie.ver}}</p>
              <p>{{movie.showInfo}}</p>
          </div>
      </li>
    </ul>
    <div class="loading" v-show="loadingShow">
        <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div class="tip" v-show="tip">
        <h4>数据已经到底了</h4>
    </div>
</div>
  
</template>

<script>
import Axios from "axios"
export default {
  data () {
      return {
          movieList: [],
          loadingShow: true,
          tip: false
      }
  }, 
  mounted () {
      this.loadDate(); 
      //jian ting gun dong tiao shi jian
      window.onscroll = () => {
        let clientHeight = document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        if(clientHeight + scrollTop == scrollHeight){
          console.log('到底了');
          this.loadingShow = true;
          if(!this.tip){
            this.loadDate();
          }else{
            this.loadingShow = false;
          }
        }
      }




     
  }, 
  methods: {
      goDetail(movieId){
        console.log(movieId);
        this.$router.push('/movie/movieDetail/' + movieId);
      },
      loadDate(){
        let url1 = API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset" + this.movieList.length;
        let url2 = '/vueapp/static/moviedata.json'
        Axios.get(url1).then(res => {
        console.log(res);
        this.loadingShow = false;
        let list = res.data.data.movies;
        let data = list.slice(this.movieList.length, 
        this.movieList.length + 5);
        if(data.length < 5){
            this.tip = true
        }
        this.movieList = this.movieList.concat(data);
        }).catch(() => {
          alert('获取数据失败');
        })
      }
  }
}
</script>

<style scoped>
    .movie-list{
        margin: 1rem 0;
    }
    .movie{
        display: flex;
        padding: 0.2rem;
        border-bottom: solid 1px #ccc
    }
    .movie-img{
        flex-grow: 1;
        width: 0;
        margin-right: 0.2rem
    }
    .movie-img img{
        width: 100%
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

    .tip{
        text-align: center
    }

    

</style>

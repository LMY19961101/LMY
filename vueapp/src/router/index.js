import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie/movieList'
    }, {
      path: '/movie',
      component: Movie,
      children: [
        {
          path: 'movieList',
          component: MovieList
        }, {
          path: 'movieDetail/:movieId',
          component: MovieDetail
        }
      ]
    }, {
     path:'/music',
     component: Music 
    }, {
      path: '/book',
      component: Book
    }, {
      path: '/photo',
      component: Photo
    }
  ]
})

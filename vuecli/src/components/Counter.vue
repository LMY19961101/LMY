<template>
  <div>
      <h1>计数器：{{$store.state.count}}</h1>
      <h1>{{count}}</h1>
      <button @click="$store.commit('add', 10)">加1</button>
      <button @click="reduce">减1</button>
      <p>
          <button @click="addAction">+</button>
          <button @click="reduceAction">-</button>
          <button @click="dis">dispatch</button>
      </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data(){
      return {}
  },
  store,
//   computed: {
//       count(){
//           return this.$store.state.count
//       }
//   }

// computed: mapState({
//     count: state=>state.count
// })

    computed: {
        ...mapState(['count']),
        ...mapGetters(['count'])
    },

    methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(["addAction", "reduceAction"]),
        dis(){
            this.$store.dispatch('addAction', 10);
        }
    }

}
</script>

<style scoped>

</style>

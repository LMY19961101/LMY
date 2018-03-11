<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="forward">前进</button>
      <button @click="back">后退</button>
      <button @click="home">首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/test">测试</router-link>
      <router-link :to="{name: 'test1',params: {name: 'xc', age: 30}}">子路由1</router-link>
      <router-link to="/test/test2">子路由2</router-link>
      <router-link to="/testurl/5/lisi">测试url</router-link>
      <router-link to="/home/8/zhangsan">redirect</router-link>
      <router-link to="/abc">alias</router-link>
    </div>
    <transition name="fade">
          <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    forward(){
      this.$router.go(1);
    },
    back(){
      this.$router.go(-1);
    },
    home(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  /* opacity: 1; */
  transition: opacity 0.5s;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity 0.5s;
}
</style>

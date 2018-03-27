<template>
  <div class="book">
      <common-header bg="rgb(121, 85, 72)">
          <span slot="title">Book</span>
      </common-header>
      <router-view></router-view>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
      <common-footer bg="rgb(121, 85, 72)"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  components: {
      CommonHeader,
      CommonFooter,
      'swipe': Swipe,
    'swipe-item': SwipeItem
  }
}
</script>

<style scoped>
.book{
    margin: 1rem 0;
}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url('https://www.dxsbb.com/upFiles/infoImg/2014072161100065.png');
  color: #fff;
}

.slide2 {
  background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1281534114,2753282363&fm=27&gp=0.jpg');
  color: #000;
}

.slide3 {
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521990653920&di=db00e0360e01ef79d1bc59db30ec83aa&imgtype=0&src=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F41c086WxHNL._SL500_AA300_.jpg');
  color: #fff;
}
</style>

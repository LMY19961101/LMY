<template>
    <div class="albums">
        <aplayer v-if="isShow" :autoplay="true" :music="musicList" :showlrc="true" :mutex="true"/>
    </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import Axios from "axios";

export default {
  data() {
    return {
      musicList: [],
      isShow: false
    };
  },
  components: {
    Aplayer  
  },
  mounted() {
    Axios.get("/static/data/musicdata.json")
      .then(res => {
        let list = res.data.musicData;
        list.forEach(element => {
          let obj = {
            title: element.title,
            pic: element.musicImgSrc,
            url: element.src,
            author: element.author,
            lrc: "../static/" + element.lrc
          }
          this.musicList.push(obj);
        });
        this.isShow = true;
        console.log(this.musicList);
      })
      .catch();
  }
};
</script>

<style scoped>
.albums {
  margin: 1rem 0;
}
</style>

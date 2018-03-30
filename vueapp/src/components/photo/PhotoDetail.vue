<template>
  <div class="detail" :style="styleObj">
  </div>
</template>

<script>
export default {
  data () {
    return {
      styleObj: {
        background: `#000 url(${this.$store.state.photoList[this.$route.params.index].src}) no-repeat center/contain`,
      }
    };
  },
  mounted () {
      console.log();
}
}
</script>

<style scoped>
.detail{
    margin: 1rem 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

</style>

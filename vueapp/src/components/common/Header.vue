<template>
  <div class="header">
    <button class="home">首页</button>
    <h2 class="title">Movie</h2>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .header{
    height: 1rem;
    background-color: rgb(33, 150, 243);
    line-height: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .home{
    color: #ffffff;
  }

  .title{
    position: absolute;
    color: #ffffff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

</style>

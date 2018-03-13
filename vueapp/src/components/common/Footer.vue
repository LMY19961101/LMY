<template>
  <ul class="footer">
    <li>电影</li>
    <li>音乐</li>
    <li>书籍</li>
    <li>图片</li>
  </ul>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer{
  width: 100%;
  height: 1rem;
  background-color: rgb(33, 150, 243);
  position: fixed;
  bottom: 0;
  display: flex;
}

.footer li{
  flex-grow: 1;
  line-height: 1rem;
  text-align: center;
  color: #ffffff;
}
</style>

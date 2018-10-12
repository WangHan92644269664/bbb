<template>
    <div>
      <el-carousel trigger="click" height="220px" style="height:160px;margin-bottom: 10px;">
        <el-carousel-item v-for="(img,index) in imgs" :key="index">
          <img :src="img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "LunboTu",
      data(){
          return{
            imgs: [
              'https://cs-op.douyucdn.cn/dycatr/8a89bb73a96ed53cd814790147200159.jpg', 'https://cs-op.douyucdn.cn/dycatr/fa7ce136a18c331ccd03a40e86a0f175.jpg',
              'https://cs-op.douyucdn.cn/dycatr/13cd4256b5130e2255a01f382474a45a.jpg', 'https://cs-op.douyucdn.cn/dycatr/570898ade5d378bcafa8c22685abf3d6.jpg'
            ]
          }
      }
    }
</script>

<style scoped>

</style>

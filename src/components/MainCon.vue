<template>
  <div>
    <div class="bottom clearfix">
      <time class="time"><i class="fa fa-user"></i>{{ con.nickname }}</time>
      <span><i class="fa fa-fire"></i>{{ con.hn }}</span>
    </div>
    <el-card :body-style="{ padding: '0px' }">
      <img :src="con.roomSrc" class="image">
      <div
        style="padding: 10px;color:#333;font-size:12px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap">
        <span>{{ con.roomName }}</span>
      </div>
    </el-card>
    </div>
</template>

<script>
  export default {
    name: "MainCon",
    props: ['con']
  }
</script>

<style scoped>

  .clearfix:after {
    clear: both
  }

  .time {
    font-size: 10px;
    color: #fff;
    position: relative;
    top: -70px;
    left: 10px;
    z-index: 10;
  }

  .el-main img {
    width: 180px;
    height: 100px;
    border-radius: 4px;
    /*position: relative;*/
  }

  .bottom span {
    position: relative;
    top: 25px;
    color: #fff;
    font-size: 10px;
    right: -30px;
  }
</style>

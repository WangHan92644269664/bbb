<template>
  <div class="hot">
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content bg-purple">搜索房间/主播/分类</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">搜索</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">最近热搜</div>
      </el-col>
    </el-row>
    <el-row :gutter="15" v-for="(hot,ins) in hots" class="three">
      <el-col :span="2">
      {{ ins+1 }}
      </el-col>
      <el-col :span="22">{{ hot }}</el-col>
    </el-row>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: "HotSearch",
    data() {
      return {
        hots: [],
      }
    },

    mounted() {
      //https://m.douyu.com/api/search/getTodayTop?count=10&isAjax=1
      axios.get('/douyu/api/search/getTodayTop', {
        params: {
          count: 10,
          isAjax: 1
        }
      }).then(val => {
        // console.log(val.data)
        this.hots = val.data.data;
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped lang="scss">
  .hot {
    margin-top: 20px;
    margin-left: 10px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .bg-purple {
    background: #f8f8f8;
    padding-left: 10px;
  }

  .grid-content {
    min-height: 36px;
    line-height: 36px;
    font-size: 15px;
    color: #333;
    width: 100%;
  }

  .bg-purple-light {
    font-weight: bold;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    line-height: 53px;
  }

  .three {
    display: inline-block;
    width: 200px;
    font-size: 13px;
    padding-left: 10px;
  }

  .three .el-col:first-child {
    background: #eee;
  }
</style>

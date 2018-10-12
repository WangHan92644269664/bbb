<template>
  <div class="cate">

    <!--题目-->
    <el-row :gutter="20" style="top:-15px">
      <el-col :span="24">选择分类</el-col>
    </el-row>

    <!--标题-->
    <nav-header>
      <el-menu-item index="0">全部</el-menu-item>
      <el-menu-item :index="index +'1'" v-for="(title,index) in titles" :key="index">{{ title.cate1Name }}
      </el-menu-item>
    </nav-header>

    <!--主体-->
    <ul class="cate-con">
      <li v-for="(data,ins) in datas" :key="ins">
        <a href="#">
          <img :src="data.icon" alt="">
          <p>{{ data.cate2Name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import NavHeader from './NavHeader'

  export default {
    name: "CatePage",
    data() {
      return {
        // isShow:false,
        titles: [],
        datas: [],
      }
    },
    components: {
      NavHeader
    },
    mounted() {
      axios.get('/douyu/api/cate/list').then(val => {
        // console.log(val.data.data)
        this.titles = val.data.data.cate1Info;
        this.datas = val.data.data.cate2Info;
        // console.log(this.titles)
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped lang="scss">
  .is-active {
    border-color: #ff5d23 !important;
    color: #ff5d23 !important;
    font-weight: 700;
  }

  .el-menu--horizontal > .el-menu-item, .el-dialog__body {
    color: #3f3f3f;
    font-size: 14px;
  }

  .cate ul.cate-con {
    background-color: #f4f4f4;
    height: 395px;
    overflow: auto;
  }

  .cate .cate-con li {
    float: left;
    width: 33.33%;
    border-bottom: 1px dashed #ddd;
    border-right: 1px dashed #ddd;
    text-align: center;
  }

  .cate .cate-con li a {
    color: #000;
    font-size: 12px;
    text-align: center;
  }

  .cate ul.cate-con li a img {
    margin-top: 24%;
    margin-bottom: 5px;
    width: 61px;
    height: 61px;
    border-radius: 50%;
  }

  .cate ul.cate-con li a p {
    margin-bottom: 15px;
  }
</style>

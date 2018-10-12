<template>
  <div class="home-header">
    <!--头部logo-->
    <title-header></title-header>

    <!--标题-->
    <nav-header>
      <el-menu-item :index="ins+'1'"  v-for="(cate,ins) in cates" :key="ins" style="color:#3f3f3f;">
        <router-link :to="'/more/'+cate.shortName">{{ cate.name }}</router-link>
      </el-menu-item>
    </nav-header>

    <!--轮播图-->
   <lunbo-tu></lunbo-tu>

    <!--弹出层-->
    <el-button type="text" @click="outerVisible = true"><i class="fa fa-bars"></i></el-button>
    <el-dialog :visible.sync="outerVisible" title="." width="100%" top="0vh" style="text-align: center;">
      <cate-title></cate-title>
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios';
  import TitleHeader from './TitleHeader'
  import CateTitle from './CateTitle'
  import LunboTu from './LunboTu'
  import NavHeader from './NavHeader'

  export default {
    name: "HomeHeader",
    data() {
      return {
        isShow: true,
        cates: [],
        outerVisible: false,
        activeIndex: '0',
      }
    },
    components: {
      TitleHeader,
      CateTitle,
      LunboTu,
      NavHeader
    },
    mounted() {
      axios.get('/douyu/api/cate/recList').then(val => {
        // console.log(val.data.data)
        this.cates = val.data.data;
        console.log(this.$route.params.id)
      }).catch(err => {
        console.log('获取分类失败', err)
      })
    }
  }
</script>

<style scoped>
  .home-header {
    padding-top: 20px;
  }
  .fa {
    position: absolute;
    right: 0px;
    top: 75px;
    color: #999;
    font-size: 20px;
    background: #fff;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .el-menu--horizontal>.el-menu-item a:hover{
    border-color: #ff5d23 !important;
    color: #ff5d23 !important;
    font-weight: 700;
  }
</style>

<template>
  <div class="more">
    <el-container>
      <el-header style="height: 60px;">
        <!--头部-->
        <el-row style="padding-top: 15px;">
          <title-header></title-header>
        </el-row>

        <el-row :gutter="20" style="padding-bottom: 30px;">
          <el-col :span="1" class="title"><i class="fa fa-caret-right"></i></el-col>
          <el-col :span="22" style="font-size:15px; color:#333"><span v-for="(data,ins) in datas" v-if="type===data.shortName">{{ data.cate2Name }}</span>
          </el-col>
        </el-row>
      </el-header>


      <!--主体-->
      <el-main style="padding: 20px 10px;">
        <el-row>
          <el-col :span="12" v-for="(con, index) in cates" :key="index" style="padding-right: 10px;">
            <main-con :con="con"></main-con>
          </el-col>
        </el-row>
      </el-main>


      <el-button @click="loadMore">加载更多</el-button>
    </el-container>
  </div>
</template>

<script>
  import TitleHeader from '../components/TitleHeader';
  import axios from 'axios';
  import MainCon from '../components/MainCon'

  export default {
    name: "MorePage",
    data() {
      return {
        cates: [],
        type: this.$route.params.id,
        count: 1,
        datas: [],
      }
    },
    methods: {
      firstGet() {
        //http://localhost:8080/douyu/api/room/list?page=1&type=jdqs
        //http://localhost:8080/douyu/api/room/list?page=2&type=jdqs
        axios.get('/douyu/api/room/list', {
          params: {
            page: this.count,
            type: this.type
          }
        }).then(val => {
          // console.log(val.data.data)
          this.cates=val.data.data.list;
        }).catch(err => {
          console.log(err)
        });
      },
      loadMore() {
        axios.get('/douyu/api/room/list', {
          params: {
            page: ++this.count,
            type: this.type
          }
        }).then(val => {
          this.cates = this.cates.concat(val.data.data.list);
          // console.log(this.cates)
        }).catch(err => {
          console.log(err)
        });
      },

    },
    components: {
      TitleHeader,
      MainCon
    },
    created() {
      this.firstGet();
    },
    mounted() {
      // console.log(this.type)
      axios.get('/douyu//api/cate/list').then(val => {
        // console.log(val.data.data.cate2Info)
        this.datas = val.data.data.cate2Info;
        // console.log(this.type)
      }).catch(err => {

        console.log(err)
      })
    },
  }
</script>

<style scoped>

  .title i {
    display: inline-block;
    width: 17px;
    height: 12px;
    border-radius: 2px;
    border: 1px solid #f70;
    color: #f70;
    line-height: 10px;
    text-align: center;
    padding: 0;
  }

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
  }

  .bottom span {
    position: relative;
    top: 25px;
    color: #fff;
    font-size: 10px;
    right: -25%;
  }
</style>

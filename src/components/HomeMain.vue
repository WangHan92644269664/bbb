<template>
  <div>
    <!--主体标题-->
    <el-container v-for="(title,index) in data" :key="index">

      <el-header style="height: 30px;">
        <el-row :gutter="20">
          <el-col :span="1" style="padding:0px"><img :src="title.icon" style="width: 18px;height:18px;"></el-col>
          <el-col :span="6" style="font-size:15px; color:#333">{{ title.tabName }}</el-col>
          <el-col :span="8"
             style="font-size:13px;border:1px solid #f70;color:#f70;border-radius: 21px;padding: 5px 10px;text-align: center">
            {{ title.tabName }}
          </el-col>
          <el-col :span="9">
            <router-link :to="'/more/'+title.sn" style="color:#999;font-size:13px;float: right;">更多<i
              class="fa fa-angle-right more"></i></router-link>
          </el-col>
        </el-row>
      </el-header>

      <!--主体-->
      <el-main style="padding: 20px 10px;">
        <el-row>
          <el-col :span="12" v-for="(con, index) in title.list" :key="index" style="padding-right: 10px;">
            <main-con :con="con"></main-con>
          </el-col>
        </el-row>
      </el-main>

    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';
  import MainCon from './MainCon'

  export default {
    name: "HomeMain",
    data() {
      return {
        data: [],
      }
    },
    components: {
      MainCon
    },
    mounted() {
      axios.get('/douyu/api/home/mix').then(val => {
        // console.log(val.data.data)
        this.data = val.data.data
      }).catch(err => {
        console.log(err)
      })
    },
  }
</script>

<style scoped lang="scss">
  .more {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #999;
    color: #fff;
    display: inline-block;
    text-align: center;
    line-height: 12px;
  }

</style>

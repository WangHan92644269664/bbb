<template>
    <div>
      <!--头部logo-->
      <el-row :gutter="20"  type="flex" justify="space-around">
        <el-col :span="5" style="padding-left: 0px;"><img src="../assets/logo864f3e.png" alt=""></el-col>
        <el-col :span="5">打开APP</el-col>
        <el-col :span="4">充值</el-col>
        <el-col :span="5"><router-link to="/search"><i class="fa fa-search"></i></router-link></el-col>
      </el-row>
      <slot></slot>
    </div>
</template>

<script>
  import CatePage from './CateTitle'
    export default {
        name: "TitleHeader",
      data(){
          return{
            // outerVisible:false,
          }
      },
      components:{
          CatePage
      }
    }
</script>

<style scoped lang="scss">
  img{
    width: 86px;
    height: 42px;
    position: relative;
    top: -4px;
  }
  .el-row .el-col:nth-of-type(2){
    border:1px solid #ff5d23;
    display: inline-block;
    color:#ff5d23;
    line-height: 30px;
    height: 30px;
    font-size:12px;
  }
  .el-row .el-col:nth-of-type(3){
    background-color: #ff5d23;
    color:#fff;
    border-radius: 2px;
    height: 30px;
    line-height: 30px;
  }
  .el-row .el-col i{
    float: right;
    color:#999;
    font-size:20px;
  }

</style>

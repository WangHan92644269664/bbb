<template>
  <nav style="font-size:14px;overflow:scroll;width: 100%;">
    <el-menu mode="horizontal" :default-active="activeIndex" style="width: 460vw;">
     <slot></slot>
    </el-menu>
  </nav>
</template>

<script>
    export default {
        name: "NavHeader",
      data(){
          return{
            activeIndex: '0',
          }
      }
    }
</script>

<style scoped>
  .is-active {
    border-color: #ff5d23 !important;
    color: #ff5d23 !important;
    font-weight: 700;
  }
</style>

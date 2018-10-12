<template>
  <div class="home">
   <home-header></home-header>
    <home-main></home-main>
  </div>
</template>

<script>
  import HomeHeader from '../components/HomeHeader'
  import HomeMain from '../components/HomeMain'

  export default {
      data:function(){
          return {

          }
      },
    components:{
        HomeHeader,
      HomeMain
    }
  }
</script>

<style lang="scss" scoped>

</style>

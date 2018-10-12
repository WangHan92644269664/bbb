// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入ui模块及样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/global.css';
// 加载组件
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.filter('fens',val=>{
  if(val<10000){
   return val;
  }
  let num= val /10000;
  num = num.toFixed(1);
  return num+'万';
})
Vue.filter('cate',val=>{
  if(val.length<=2){
    return val
  }else{
    return ''
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

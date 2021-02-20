import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// vuex 初始化
//引入、注册、创建实例
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  // 开启严格模式,只能在mutation中修改state
  strict:true,
  // state对象 公共状态属性,存放数据
  state:{
    count:1,
    age:18,
    name:'haha',
    addr:{
      china:{
        guangdong:{city:'guangzhou'}      
      }
    } 
  },
  getters:{
    addNum(state){
      return state.count+state.age
    },
    // 改变state中数据的嵌套层级
    addr(state){
      return state.addr.china.guangdong.city
    }
  },
  // mutation对象,里面的每个属性都是一个可以改变state的函数
  mutations:{
    addCount(state,payload){
      state.count+=payload
    },
    reduceCount(state,payload){
      state.count-=payload
    }
  },
  // actions对象 里面的属性都是可执行异步操作的函数
  actions:{
    setAsyncCount(store,payload){
      setTimeout(() => {
        store.commit('addCount', payload)
      }, 3000);
    }
  }
})



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

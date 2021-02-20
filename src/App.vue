<template>
  <div>
    <p>测试</p>
    <p>{{$store.state.count}} {{$store.state.age}} {{$store.state.name}}</p>
    <p>计算属性优化</p>
    <p>{{count}} {{age}} {{name}}</p>
    <p>使用getter</p>
    <p>和：{{addNum}}</p>
    <p>地址：{{addr}}</p>

    <button @click="addCount(3)">增加</button>
    <button @click="reduceCount(3)">减少</button>
    <button @click="setAsyncCount(4)">延时3S异步增加</button>
  </div>
</template>

<script>
// 引入辅助函数
import { mapState, mapGetters ,mapMutations,mapActions } from 'vuex'
export default {
mounted(){
  // script内需要this
  console.log(this.$store.state.count);
},
methods:{
  // 直接调用mutations
  // addCount(){
  //    this.$store.commit('addCount', 2)  
  // },
  ...mapMutations(['addCount','reduceCount']),// 通过辅助函数调用mutations

  // setAsyncCount(){
  //   this.$store.dispatch('setAsyncCount',1)  // 直接调用actions
  // }

  ...mapActions(['setAsyncCount']),// 通过辅助函数调用actions
},
// 使用计算属性优化
computed:{
  // count(){
  //   return this.$store.state.count
  // },  // 直接调用State
  name(){
    return this.$store.state.name
  },
  ...mapState(['count','age']),  // 通过辅助函数调用State
  ...mapGetters(['addNum','addr']) //通过辅助函数调用Getter
}


}
</script>

<style>

</style>
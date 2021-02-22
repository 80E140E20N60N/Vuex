## Vuex

### 基本信息

共享数据存在state中，可以在组件中引用显示，state中的状态不能直接修改，只能借助mutations进行修改。mutations只能执行同步操作，执行异步操作需要通过actions，然后将数据提交给mutations进行修改

[![https://gitee.com/ZZH6/picture/raw/master/Vue/4UOE!^!ok078.png](https://gitee.com/ZZH6/picture/raw/master/Vue/4UOE!^!ok078.png)](https://gitee.com/ZZH6/picture/raw/master/Vue/4UOE!^!ok078.png)

### state

公共数据状态    

直接使用方式：this.$store.state.count

注：状态对象，一般在data或computed里使用

### getters

修改state数据，比如修改数据的嵌套层级，方便使用

注：一般在data或computed里使用

### mutations   

1、凡是修改state状态，都是通过mutations来完成

2、mutations只能执行同步操作

3、直接使用方式  this.$store.commit(' addCount ',123)

注：改变数据的函数，一般在method里使用

### actions

1、actions可以执行异步操作

2、actions不可以直接操作state的状态，需要使用mutations才可以

3、会返回一个promise，即可以接.then

4、直接使用方式  this.$store.dispatch(' setAsyncCount ',123)

注：异步函数，一般在method里使用

```js
state:{
	count:0
},

mutations{
	addCouunt(state,data){
		state.count += data
	}
},

actions:{
	setAsyncCount(store,data){
		setTimeout(()=>{
			store.commit('addCouunt',data)
		},3000)
	}
}

//可以看出mutations内的函数自带state参数,可以对state状态进行修改
//而actions内的函数自带store参数,可以调用mutations内的函数对state状态进行修改
```

### 模块化 Module

命名空间namespaced

默认情况下action、mutation 和 getter 是注册在**全局命名空间**，如果想要保持内部模块的高封闭性，可以在各模块设置命名空间锁（ namespaced: true），写法如下

```js
user: {
  namespaced: true,
   state: {
     token: ''
   },
   mutations: {
    //  这里的state表示的是user的state
     updateToken (state，data) {
        state.token = data
     }
   }
},
```
带有命名空间锁的模块使用方式：

```js
<button @click="test">修改token</button>

//注：需要带上模块的文件路径
   //直接写法
  methods: {
       test () {
           this.$store.commit('user/updateToken',res.data.data)
       }
   }	

  //辅助函数写法
 import { mapMutations } from 'vuex'
  methods: {
       ...mapMutations(['user/updateToken']),
       test () {
           this['user/updateToken'](res.data.data)
       }
   }
```


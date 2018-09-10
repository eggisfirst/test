<template>

  <div class="addThing">
    <div class="newTask">
      <input type="text" v-model="newTodo" @keypress.enter="addTodo">
    </div>
    <ol class="todos">
      <li v-for ='todo in todoList' :key='todo'>
        <input type="checkbox" v-model="todo.done">
        {{ todoList }}
        <span v-if ='todo.done'>已完成</span>
        <span v-else>未完成</span>
        <button @click="removeTode(todo)">x</button>
      </li>
    </ol>
     <h1 v-show="ok">hello</h1>
    <button @click="toggle()"></button>
    <h2 v-if="ok">yes</h2>
    <h3 v-else>no</h3>
    <button @click="toggleif()"></button>
    <!-- 开头出现动画效果 -->
    <button @click="show = !show">
      toggle
    </button>
    <transition name='custom-classes-transition'
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight">
      <p v-if="show">hello</p>
    </transition>
     <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <p v-if="show">
      Demo
    </p>
  </transition>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      newTodo: "",
      todoList: [],
      ok:true,
      show:true
      
    };
  },
  created:function(){
    window.onbeforeunload = ()=>{
      let dataString = JSON.stringify(this.todoList)
      window.localStorage.setItem('myTodos',dataString)
    }
    let oldDataString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []
  },
  methods: {
    addTodo: function() {
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done : false
      });
      this.newTodo = ''
    },
    removeTode:function(todo){
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index,1)
    },
      toggle:function(){
        this.ok = !this.ok
      },
      toggleif:function(){
        this.ok = !this.ok
      },
      beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  width: 100px;
  height: 30px;
  background: #e1e1e1;
  border: none
}
.fade-enter-active{
  animation: fade-in .5s;
}
.fade-leave-active{

  animation: fade-in .5s reverse
}
.fade-enter,.fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
@keyframes fade-in {
  0%{
    transform: scale(0)
  }
  50%{
    transform: scale(1.5)
  }
  100%{
    transform: scale(1)
  }
}
</style>

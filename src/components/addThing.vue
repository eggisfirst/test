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
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      newTodo: "",
      todoList: []
      
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

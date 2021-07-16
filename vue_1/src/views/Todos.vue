<template>
  <div>
    <div class="todoList">
      <h2 class="title">TodoList</h2>
      <TodoAdd
        @add-todo="addTodo"
      />
      <hr>
      <Loader v-if="loading"/>
      <TodoList 
        v-else-if="todos.length"
        v-bind:todos="todos" 
        @remove-todo="removeTodo"
      />
      <p v-else>No todos!</p>
    </div>
  </div>
</template>

<script>

import TodoList from '../components/todo/todoList.vue';
import TodoAdd from '../components/todo/addTodo.vue';
import Loader from '../components/loader.vue';


export default {
  name: 'App',
  data(){
    return{
      todos:[ ],
      loading: true,
      filter: 'all',
    }
  },
  components: {
    TodoList, TodoAdd, Loader
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(json => {
        this.todos = json;
        this.loading = false;
      })
  },
  methods:{
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo){
      this.todos.unshift(todo)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}



.todoList{
  border:6px solid #2c3e50;
  display: block;
  padding: 30px 20px;
  border-radius: 20px;
  max-width: 330px;
  margin: 0 auto;
}

.title{
  text-align: center;
}

.filter{
  display: block;
  margin: 0 auto;
  padding: 3px 10px;
}
</style>

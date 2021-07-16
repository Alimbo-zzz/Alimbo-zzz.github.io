<template>
  <div class="List">
    <ul>
      <TodoItem
        v-for="(todo, i) in todos"
        :key="todo.id"
        v-bind:todo="todo"
        v-bind:index="i"
        v-on:remove-todo="removeTodo"
      ></TodoItem>
    </ul>
  </div>
</template>

<script>

  import TodoItem from './todoItem.vue';


export default {
  props:['todos'],
  components:{
    TodoItem
  },
  methods:{
    removeTodo(id){
      this.$emit('remove-todo', id)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style: none;
    padding: 0;margin: 0;
  }
</style>

<template>
  <form class="add-box" @submit.prevent="onSubmit">
    <input type="text" class="add-todo-text" v-model="title">
    <button type="submit" class="add">add</button>
  </form>

</template>




<script>
  export default{
    data(){
      return{
        title:'',
      }
    },
    methods:{
      onSubmit(){

        if(this.title.trim()){
          const newTodo = {
            id: Date.now(),
            title: this.title,
            completed: false,
          }
          this.$emit('add-todo', newTodo)
          this.title = '';
        }
      }
    }
  }
</script>



<style scoped>
  .add-box{
    display: flex;
  }
  .add-todo-text{
    display: block;
    width: 100%;
    padding: 3px 10px;
  }
  .add{
    display: block;
    margin-left: 10px;
  }
</style>
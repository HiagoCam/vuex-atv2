<template>
  <div id="app">
    <TodoForm />
    <TodoList/>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue"
import TodoList from "./components/TodoList.vue"

export default {
  name: 'App',
  components: {
    TodoForm, TodoList
  }, data:function(){
    return{
    }
  }
}
</script>

<style>
</style>

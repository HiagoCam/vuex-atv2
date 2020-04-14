<template>
  <div id="todoList">
      <div class="tarefas" v-for="(todoList, index) in tarefas" :key="index">
        {{todoList.descricao}}
      </div>
  </div>
</template>

<script>
export default {
    name:"TodoList",
    computed:{
        tarefas(){
            return this.$store.state.tarefas
        }
    }
}
</script>

<style>
    #todoList{
        background-color: rgba(38, 250, 250, 0.294);
        width: 430px;
        height: 300px;
        margin: 10px 0px 0px 37%;
        display: flex;
        flex-wrap: wrap;
        border-radius: 10%;
        overflow: auto;
    }

    .tarefas{
        width: tarefas;
        padding: 10px;
        font-size: 11px;
        line-height: 3px;
        word-wrap: break-word;
        flex-wrap: wrap;
        background-color: black;
        height: 50px;
        border: 1px solid white;
        margin: 2px 20px 0 20px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }
    
</style>
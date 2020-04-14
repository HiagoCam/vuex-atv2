<template>
  <div id="Form">
  <input id="txt" type="text" placeholder="Nova Tarefa?" v-model="novaTarefa">
  <button id="botao" @click="adicionarTarefa">OK</button>
  </div>
</template>

<script>
export default {
    name: "TodoForm",
    data: function(){
        return{
            novaTarefa: ''
        }
    }, methods:{
        adicionarTarefa: function(){
            this.$store.commit('adicionarTarefa',{descricao: this.novaTarefa})
        }
    }
}
</script>

<style>
    #Form{
        background-color: white;
        width: 800px;
        height: 200px;
        margin: 80px 0px 0px 22%;
        border-radius: 30%;
    }

    #txt{
        margin: 80px 0 0 30%;
        height: 20px;
        width: 200px;
        border: black 2px solid;
    }

    #botao{
        width: 70px;
        height: 50px;
        background-color: cyan;
        border-radius: 20%;
        cursor: pointer;
        outline: none;
        margin-left: 10px;
        color: white;
    }
</style>
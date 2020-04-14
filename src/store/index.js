import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      tarefas:[
        {descricao:"Matemática"},
        {descricao:"Biologia"},
        {descricao:"Geografia"},
      ]
    },
    mutations: {
        adicionarTarefa(state, descricao){
          state.tarefas.push(descricao)
        }
    },
    action: {

    },
    modules: {

    }
})
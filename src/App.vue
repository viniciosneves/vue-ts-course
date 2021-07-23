<template>
  <div class="AppStyle">
    <Formulario @adicionar-tarefa="adicionarTarefa"/>
    <Cronometro :tempo="selecionada.tempo"/>
    <Lista :tarefas="tarefas" @aoSelecionarTarefa="selecionarTarefa"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from './components/Formulario.vue'
import Cronometro from './components/Cronometro/index.vue'
import Lista from './components/Lista/index.vue'
import ITarefa from "./interfaces/Tarefa";

export default defineComponent({
  name: 'App',
  components: {
    Formulario,
    Cronometro,
    Lista
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      selecionada: {
        tempo: "00:00",
        descricao: "",
        completado: false
      } as ITarefa
    };
  },
  methods: {
    adicionarTarefa (tarefa:ITarefa) : void {
      this.tarefas.push(tarefa)
    },
    selecionarTarefa (tarefa: ITarefa) : void {
      this.selecionada = tarefa
    }
  }
});
</script>

<style lang="scss">
@import url('./estilos.scss');
.AppStyle {
  display: grid;
  grid-template-rows: min-content min-content auto;
  grid-template-areas: 
  "nova-tarefa"
  "cronometro"
  "tarefas"
  ;
  row-gap: 24px;
  min-width: 320px;
  min-height: calc(100vh - 32px);
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 10px;
  background-image: linear-gradient(to right, #E1E5EA , #E7E9EC);

  @media screen and (min-width:1280px)  {
    grid-template-areas: 
    "nova-tarefa tarefas"
    "cronometro tarefas"
    ;
    column-gap: 64px;
    grid-template-rows: min-content min-content;
    grid-template-columns: 750px 300px;
    justify-content: center;
    align-content: center;
    padding: 64px;
  }
}
</style>

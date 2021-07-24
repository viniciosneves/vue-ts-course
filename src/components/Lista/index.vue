<template>
  <aside class="listaTarefas">
    <h2>Tarefas</h2>
    <ul>
      <Item @ao-clicado="aoClicado" v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Item from './Item/index.vue'
import ITarefa from "../../interfaces/Tarefa";

export default defineComponent({
  emits: ['aoSelecionarTarefa'],
  components: {
    Item
  },
  props: {
    tarefas: {
      type: Array as PropType<ITarefa[]>,
      required: true
    }
  },
  methods: {
    aoClicado (tarefa: ITarefa) : void {      
      this.tarefas.forEach(tarefa => tarefa.selecionado = false)
      tarefa.selecionado = true
      this.$emit('aoSelecionarTarefa', tarefa);
    }
  }
});
</script>

<style lang="scss">
.listaTarefas {
  grid-area: tarefas;
  height: 100%;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 12px;
    color: #252323;
  }

  ul {
    max-height: 350px;
    overflow-y: scroll;
    scrollbar-width: thin;
  }

  @media screen and (min-width: 1280px) {
    h2 {
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 24px;
    }

    ul {
      overflow: auto;
      max-height: 500px;
    }
  }
}
</style>
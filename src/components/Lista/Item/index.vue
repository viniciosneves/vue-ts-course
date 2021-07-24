<template>
  <li class="item" :class="{ itemCompletado: tarefa.completado, itemSelecionado: tarefa.selecionado  }" @click="aoClicado">
    <h3>{{tarefa.descricao}}</h3>
    <span>{{tarefa.tempo}}</span>
    <span v-if="tarefa.completado" class="concluido" aria-label="icone de concluido"></span>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ITarefa from "../../../interfaces/Tarefa";

export default defineComponent({
  emits: ['aoClicado'],
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  methods: {
    aoClicado () : void {
      if (this.tarefa.completado) {
        return
      }
      this.$emit('aoClicado', this.tarefa)
    }
  }
});
</script>

<style lang="scss">
.item {
  background-color: #A8C5D7;
  border-radius: 8px;
  box-shadow: 2px 4px 4px #858F95;
  padding: 12px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;

  h3 {
    margin-bottom: 8px;
    word-break: break-all;
    color: #252323;
  }

  span {
    color: #716567;
  }

  @media screen and (min-width:1280px) {
    font-size: 1.8rem;
  }
}

.itemSelecionado {
  background-color: #A1B5C1;
  box-shadow: none;
  box-shadow: 2px 4px 4px #5D666B inset;
}

.itemCompletado {
  cursor: auto;
  .concluido {
    display: block;
    background-image: url('../../../assets/img/check-mark.svg');
    background-repeat: no-repeat;
    background-size: 38px 38px;
    position: absolute;
    filter: drop-shadow(1px 1px 4px #839971);
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 42px;
    height: 43px;
  }
}
</style>
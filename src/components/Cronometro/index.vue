<template>
  <div class="cronometro">
    <Relogio :totalSegundos="totalSegundos"/>
    <button @click="iniciarCronometro">Começar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import { delay, tempoParaSegundos } from "../../common/utils/date";
import Relogio from './Relogio.vue'

export default defineComponent({
  components: {
    Relogio,
  },
  props: {
    tempo: {
      type: String,
    },
  },
  emits: ['finalizado'],
  setup(props) {
    const totalSegundos = ref(0);
    watch(
      () => props.tempo,
      (novoTempo) => {
        if (novoTempo) {
          totalSegundos.value = tempoParaSegundos(novoTempo);
        }
      }
    )
    return {
      totalSegundos
    }
  },
  methods: {
    async iniciarCronometro () : Promise<void> {
      while (this.totalSegundos > 0) {        
        await delay()
        this.totalSegundos--
      }
      this.$emit('finalizado')
    }
  }
});
</script>

<style lang="scss">
.cronometro {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: cronometro;  
  button {
    width: 150px;
    padding: 16px;
    color: #272626;
    font-size: 1.25rem;
    background-color: #b2d795;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #839971;
    cursor: pointer;

    &:active {
      background-color: #a7c68f;
      box-shadow: 2px 2px 4px #839971 inset;
      cursor: auto;
    }
  }

  @media screen and (min-width: 1280px) {
    .relogioWrapper {
      font-size: 15rem;
    }

    button {
      grid-column-start: span 2;
      justify-self: center;
      width: 200px;
      font-size: 2.25rem;
    }
  }
}
</style>
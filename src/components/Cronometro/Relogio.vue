<template>
  <div class="relogioWrapper">
    <span class="relogioNumero">{{ minutoEsquerdo }}</span>
    <span class="relogioNumero">{{ minutoDireito }}</span>
    <span class="relogioDivisao">:</span>
    <span class="relogioNumero">{{ segundoEsquerdo }}</span>
    <span class="relogioNumero">{{ segundoDireito }}</span>
  </div>
</template>

<script lang="ts">

import { defineComponent, watch, ref } from "vue";

export default defineComponent({
  props: {
    totalSegundos: {
      type: Number,
    },
  },
  setup(props) {
    const minutoEsquerdo = ref("0");
    const minutoDireito = ref("0");
    const segundoEsquerdo = ref("0");
    const segundoDireito = ref("0");
    watch(
      () => props.totalSegundos,
      (novoTotal) => {
        if (novoTotal != undefined) {
          const minutos = ("0" + Math.floor(novoTotal / 60))
            .slice(-2)
            .split("");
          const segundosRestantes = ("0" + (novoTotal % 60))
            .slice(-2)
            .split("");
          minutoEsquerdo.value = minutos[0];
          minutoDireito.value = minutos[1];
          segundoEsquerdo.value = segundosRestantes[0];
          segundoDireito.value = segundosRestantes[1];
        }
      }
    );
    return {
      minutoEsquerdo,
      minutoDireito,
      segundoEsquerdo,
      segundoDireito,
    };
  },
});

</script>

<style lang="scss">
.relogioWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 16px 12px;
    margin-bottom: 24px;
    box-shadow: 2px 4px 4px #839971;
    background-color: #da7f8f;
    font-size: 5rem;
    color: #fcd8d8;
    .relogioNumero {
      background-color: #c35266;
      box-shadow: 2px 2px 4px #7c5058 inset;
      height: 3.6rem;
      width: 3rem;
      padding: 8px 4px;
      border-radius: 10px;

      @media screen and (min-width: 1280px) {
        height: 10.8rem;
        width: 9rem;
      }
    }

    .relogioDivisao {
      height: 4.2rem;

      @media screen and (min-width: 1280px) {
        height: 12.6rem;
      }
    }
  }
</style>
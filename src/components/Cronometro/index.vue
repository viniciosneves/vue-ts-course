<template>
  <div class="cronometro">
    <div class="relogioWrapper">
      <span class="relogioNumero">0</span>
      <span class="relogioNumero">0</span>
      <span class="relogioDivisao">:</span>
      <span class="relogioNumero">0</span>
      <span class="relogioNumero">0</span>
    </div>
    <button>Começar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  props: {
    tempo: {
      type: String,
    },
  },
  setup(props): void {
    watch(
      () => props.tempo, (novoTempo) => {
        console.log(novoTempo);
      }
    );
  },
});
</script>

<style lang="scss">
.cronometro {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: cronometro;
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
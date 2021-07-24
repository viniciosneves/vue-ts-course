<template>
  <form @submit.prevent="salvar" class="novaTarefa">
    <div class="inputContainer">
      <label>Nova tarefa</label>
      <input
        type="text"
        name="tarefa"
        id="tarefa"
        placeholder="O que você fará?"
        v-model="tarefa.descricao"
        autocomplete="off"
        required
      />
    </div>
    <div class="inputContainer">
      <label>Tempo</label>
      <input
        type="time"
        step="1"
        name="tempo"
        id="tempo"
        min="00:00:00"
        max="01:30:00"
        v-model="tarefa.tempo"
        required
      />
    </div>
    <button type="submit">Adicionar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ITarefa from "../interfaces/Tarefa";

export default defineComponent({
  emits: ['adicionarTarefa'],
  data() {
    return {
      tarefa: {
        tempo: "00:00",
        descricao: "",
        completado: false
      } as ITarefa,
    };
  },
  methods: {
    salvar() : void {
      this.$emit('adicionarTarefa', this.tarefa)
      this.tarefa = {
        tempo: "00:00",
        descricao: "",
        completado: false
      }
    }
  }
});
</script>

<style lang="scss">
.novaTarefa {
  display: flex;
  flex-direction: column;
  grid-area: nova-tarefa;
  background-color: #da7f8f;
  border-radius: 10px;
  box-shadow: 2px 4px 4px #839971;
  padding: 12px;

  .inputContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;

    label {
      margin-bottom: 8px;
      font-size: 1.25rem;
    }

    input {
      width: 100%;
      padding: 8px 12px 4px;
      box-sizing: border-box;
      border: unset;
      border-radius: 5px;
      background-color: #c35266;
      box-shadow: 0px 2px 4px #2d2b2b9f inset;
      font-size: 1.25rem;
      color: #f0f0f0;
      &::placeholder {
        color: #bfbfbf;
      }
    }
  }

  button {
    align-self: center;
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
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 24px;
    box-sizing: border-box;

    .inputContainer {
      width: calc(60% - 12px);

      &:last-of-type {
        width: 40%;
      }

      label {
        font-size: 2.5rem;
      }

      input {
        height: 100%;
        font-size: 2.25rem;
      }
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
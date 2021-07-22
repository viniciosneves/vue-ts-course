<template>
  <aside class="listaTarefas">
    <h2>Tarefas</h2>
    <ul></ul>
  </aside>
</template>

<script>
export default {};
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
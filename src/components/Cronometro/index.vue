<template>
  <div class="cronometro">
    <Relogio/>
    <button>Começar</button>
  </div>
</template>

<script>
import Relogio from './Relogio'
export default {
  components: {
    Relogio
  }
}
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
    background-color: #B2D795;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #839971;
    cursor: pointer;
    
    &:active {
      background-color: #A7C68F;
      box-shadow: 2px 2px 4px #839971 inset;
      cursor: auto;
    }
  }

  @media screen and (min-width:1280px) {
    
    .relogioWrapper{
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
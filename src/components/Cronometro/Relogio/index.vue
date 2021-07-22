<template>
  <div class="relogioWrapper">
    <span class="relogioNumero">0</span>
    <span class="relogioNumero">0</span>
    <span class="relogioDivisao">:</span>
    <span class="relogioNumero">0</span>
    <span class="relogioNumero">0</span>
  </div>
</template>

<script>
export default {};
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
  background-color: #DA7F8F;
  font-size: 5rem;
  color: #FCD8D8;
  .relogioNumero {
    background-color: #C35266;
    box-shadow: 2px 2px 4px #7C5058 inset;
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
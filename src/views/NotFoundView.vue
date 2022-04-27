<template>
  <section>
    <h1>Página não encontrada</h1>
    <router-link class="home" to="/">Voltar para a Home</router-link>
  </section>
</template>

<script>
export default {
name: "NotFoundView",
 created(){
    document.title = "Página não encontrada"
  }
}
</script>

<style scoped>
  h1{
    margin: 20px auto;
    text-align: center;
  }
  .home{
    display: block;
    margin: 0 auto;
    text-align: center;
  }
</style>
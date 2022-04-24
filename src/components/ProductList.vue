<template>
  <section>
    <div
      v-for="produto in produtos"
      :key="produto.id"
    >
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      >
      <p class="preco">{{produto.preco}}</p>
      <h2 class="titulo">{{produto.nome}}</h2>
      <p>{{produto.decricao}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      produtos: null
    }
  },
  methods: {
    getProdutos () {
      fetch("https://localhost:3000/produto")
        .then(res => res.josn())
        .then(res => {
          this.produtos = res
        })
    }
  }
}
</script>

<style>
</style>
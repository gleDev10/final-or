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
import { api } from '@/services/api.js'

export default {
  data () {
    return {
      produtos: null
    }
  },
  methods: {
    getProdutos () {
      api.get("/produto")
        .then(res => {
          this.produtos = res.data
        })
    }
  }
}
</script>

<style>
</style>
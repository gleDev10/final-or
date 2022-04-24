<template>
  <form>
    <input
      type="text"
      name="busca"
      id="busca"
      v-model="busca"
    >
    <input
      type="submit"
      value="Buscar"
      id="lupa"
      @click.prevent="getProdutos"
    >
  </form>
</template>

<script>
import { api } from '@/services/api.js'
import { serialize } from '@/helpers.js'

export default {
  data () {
    return {
      busca: "",
      produtosPorPagina: 9
    }
  },
  computed: {
    url () {
      const query = serialize(this.$route.query)
      return `/produto?limit=${produtosPorPagina}${query}`
    }
  },
  methods: {
    getProdutos () {
      api.get(this.url).then(response => {
        this.produtos = response.data
      })
    }
  },
  created () {
    this.getProdutos()
  },
  watch: {
    url () {
      this.getProdutos()
    }
  }
}
</script>

<style>
</style>
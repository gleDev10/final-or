<template>
  <form>
    <input
      type="text"
      name="busca"
      id="busca"
      v-model="busca"
      placeholder="Buscar..."
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px;
  position: relative;
}
#busca {
  width: 100%;
  padding: 20px;
  border: none;
}
#busca:focus,
#busca:hover {
  transform: scale(1.1);
}
#lupa {
  width: 62px;
  height: 62px;
  background-image: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}
</style>
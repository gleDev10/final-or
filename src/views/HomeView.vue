<template>
  <div>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProductSearch />
    <ProductList />
  </div>
</template>

<script>
import ProductSearch from '@/components/ProductSearch.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'HomeView',
  components: {
    ProductSearch,
    ProductList
  },
  created(){
    document.title = "Ranek"
  }
}
</script>
<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>

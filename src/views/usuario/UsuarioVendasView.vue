<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div
        class="produtos-wrapper"
        v-for="(venda, index) in vendas"
        :key="index"
      >
        <ProdutoItem
          v-if="venda.produto"
          :produto="venda.produto"
        >
          <p class="vendedor"><span>Vendedor: </span>{{venda.vendedor}}</p>
        </ProdutoItem>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul>
            <li
              v-for="(value, key) in venda.endereco"
              :key="key"
            >
              {{key}}: {{value}}
            </li>
          </ul>
        </div>
      </div>
    </div>
     <LoadingAnimation v-else />
  </section>
</template>

<script>
import ProdutoItem from '@/components/ProdutoItem.vue'
import { api } from '@/services/api'
import { mapState } from 'vuex'
export default {
  components: {
    ProdutoItem
  },
  data () {
    return {
      vendas: null
    }
  },
  computed: {
    ...mapState(["usuario", "login"])
  },
  methods: {
    getVendas () {
      api.get('/transacao?tipo=vendedor_id').then(response => {
        this.vendas = response.data
      })
    }
  },
  watch: {
    login () {
      this.getVendas();
    }
  },
  created () {
    if (this.login) {
      this.getVendas();
    }
          document.title = "Painel do Usuário | Vendas"

  }
}
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}
.vendedor span {
  color: #e80;
}
h2 {
  margin-bottom: 20px;
}
.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}
h2 {
  margin-bottom: 20px;
}
h3 {
  margin: 0;
  justify-content: end;
}
@media screen and (max-width: 500px){
  .entrega{
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  h3 {
    justify-content: start;
  }
}
</style>
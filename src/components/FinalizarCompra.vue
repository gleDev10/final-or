<template>
  <div>
    <h2>Endereço de envio</h2>
    <ErroNotificacao :erros="erros" />
    <UsuarioForm>
      <button
        class="btn"
        @click="finalizarCompra"
      >Finalizar Compra</button>
    </UsuarioForm>
  </div>
</template>

<script>
import UsuarioForm from '@/components/UsuarioForm.vue'
import { mapState } from 'vuex'
import { api } from '@/services/api'

export default {
  name: "FinalizarCompra",
  components: {
    UsuarioForm
  }, data(){
    return{
      erros: []
    }
  },
  props: ["produto"],
  computed: {
    ...mapState(["usuario"]),
    compra () {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado,
        }
      }
    }
  },
  methods: {
    async criarTransacao () {
      return api.post("/transacao", this.compra).then(() => {
        this.$router.push({ name: "compras" })
      })
    },
    async criarUsuario () {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario)
        await this.$store.dispatch("logarUsuario", this.$store.state.usuario)
        await this.$store.dispatch("getUsuario", this.$store.state.usuario.email)
        await this.criarTransacao()
      } catch (error) {
        this.erros.push(error.response.data.message)
      }
    },
    finalizarCompra () {
               this.erros = []
      if (this.$store.state.login) {
        this.criarTransacao()

      } else {
        this.criarUsuario()
      }
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 40px 0 30px;
}
.btn {
  background: #e80;
}
</style>
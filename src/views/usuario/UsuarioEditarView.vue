<template>
  <section>
    <UsuarioForm>
      <button
        class="btn"
        @click.prevent="atualizarUsuario"
      >Atualizar Usuário</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from '@/components/UsuarioForm.vue'
import { api } from '@/services/api'


export default {
  name: "UsuarioEditarView",
  components: {
    UsuarioForm
  },
  methods: {
    atualizarUsuario () {
      api.put('/usuario', this.$store.usuario).then(() => {
        this.$store.dispatch("getUsuario")
        this.$router.push({ name: 'usuario' })
      }).catch(error => console.warn(error.response))
    }
  }
}
</script>

<style>
</style>
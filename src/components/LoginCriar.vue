<template>
  <section>
    <transition mode="out-in">
      <div>
        <h2>Crie a sua Conta</h2>
        <button
          v-if="!criar"
          @click="criar = true"
          class="btn"
        >Criar Conta</button>
        <UsuarioForm v-else>
          <button
            class="btn btn-form"
            @click.prevent="criarUsuario"
          >Criar usuário</button>
        </UsuarioForm>
      </div>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"

export default {
  name: "LoginCriar",
  components: {
    UsuarioForm
  },
  data () {
    return {
      criar: false
    }
  },
  methods: {
    criarUsuario () {
      this.$store.dispatch("criarUsuario", this.$store.state.usuario)
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.btn-form {
  max-width: 100%;
}
</style>
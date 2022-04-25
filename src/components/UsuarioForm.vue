<template>
  <form>
    <label for="nome">Nome</label>
    <input
      type="text"
      name="nome"
      v-model="nome"
      id="nome"
    >
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      v-model="email"
      id="email"
    >
    <label for="senha">Senha</label>
    <input
      type="password"
      name="senha"
      v-model="senha"
      id="senha"
    >
    <label for="cep">CEP</label>
    <input
      type="text"
      name="cep"
      v-model="cep"
      id="cep"
    >
    <label for="rua">Rua</label>
    <input
      type="text"
      name="rua"
      v-model="rua"
      id="rua"
    >
    <label for="numero">Número</label>
    <input
      type="text"
      name="numero"
      v-model="numero"
      id="numero"
    >
    <label for="bairro">Bairro</label>
    <input
      type="text"
      name="bairro"
      v-model="bairro"
      id="bairro"
    >
    <label for="cidade">Cidade</label>
    <input
      type="text"
      name="cidade"
      v-model="cidade"
      id="cidade"
    >
    <label for="estado">Estado</label>
    <input
      type="text"
      name="estado"
      v-model="estado"
      id="estado"
    >
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "UsuarioForm"
}
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
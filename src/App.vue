<template>
  <HeaderPrimary />
  <main id="main">
    <transition mode="out-in">
      <router-view />
    </transition>
  </main>
  <FooterPrimary />
</template>
<script>

import HeaderPrimary from '@/components/HeaderPrimary.vue'
import FooterPrimary from '@/components/FooterPrimary.vue'
import { api } from './services/api'


export default {
  components: {
    HeaderPrimary,
    FooterPrimary
  },
  created(){
    if(window.localStorage.token){
      api.validateToken().then(() => {
        this.$store.dispatch("getUsuario")
      }).catch(() => {
        window.localStorage.removeItem("token")
      })
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
p {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
body {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #345;
  background: url("./assets/pattern.svg") repeat top;
}
a {
  color: #345;
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}
button {
  cursor: pointer;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
}
.btn:hover {
  background: #65d;
  transform: scale(1.1);
}
.btn:disabled,.btn:disabled:hover{
  background: #bbc;
  transform: scale(1);
  cursor: not-allowed;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  flex: 1;
}
label {
  margin-bottom: 5px;
}
input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}
input:focus,
input:hover,
textarea:focus,
textarea:hover {
  outline: none;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-leave-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>

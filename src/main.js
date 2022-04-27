import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadingAnimation from '@/components/LoadingAnimation'
import ErroNotificacao from '@/components/LoadingAnimation'


const app = createApp(App)

app.component("LoadingAnimation", LoadingAnimation)
app.component("ErroNotificacao", ErroNotificacao)
app.config.globalProperties.$filters = {
  numeroPreco (valor) {
    valor = Number(valor)
    if (!isNaN(valor)) {
      return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    } else {
      return ""
    }
  }
}
app.use(store).use(router)

app.mount('#app')

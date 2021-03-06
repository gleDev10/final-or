import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
import UsuarioView from '../views/usuario/UsuarioView.vue'
import UsuarioProdutosView from '../views/usuario/UsuarioProdutosView.vue'
import UsuarioEditarView from '../views/usuario/UsuarioEditarView.vue'
import UsuarioComprasView from '../views/usuario/UsuarioComprasView.vue'
import UsuarioVendasView from '../views/usuario/UsuarioVendasView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: ProductView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/usuario',
    component: UsuarioView,
    children: [
      {
        path: '',
        name: 'usuario',
        component: UsuarioProdutosView,
      },
      {
        path: 'compras',
        name: 'compras',
        component: UsuarioComprasView,
      },
      {
        path: 'vendas',
        name: 'vendas',
        component: UsuarioVendasView,
      },
      {
        path: 'editar',
        name: 'editar',
        component: UsuarioEditarView,
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

export default router

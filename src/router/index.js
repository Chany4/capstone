import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CartView from '@/views/CartView.vue'
import ContactView from '@/views/ContactView.vue'
import AdminView from '@/views/AdminView.vue'
import MechanicalView from '@/views/MechanicalView.vue'
import InteriorExteriorView from '@/views/InteriorExteriorView.vue'
import ProductSingleView from '@/views/MechanicalSingle.vue'
import IntExtSingle from '@/views/IntExtSingle.vue'
import LoginView from '@/views/LoginView.vue'
import UserDetails from '@/views/UserDetails.vue'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path:'/MechanicalView',
    name:'MechanicalView',
    component:MechanicalView
  },
  {
    path:'/interiorExterior',
    name:'interiorExterior',
    component:InteriorExteriorView
  },
  {
    path: '/singleView/:id',
    name: 'singleView',
    component:ProductSingleView,
    props: true
  },
  {
    path:'/singleViewIntExt/:id',
    name:'singleViewIntExt',
    component: IntExtSingle,
    props:true
  },
  {
    path: '/login',
    name:'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: ()=>import('@/views/LoginView.vue'),
    beforeEnter(){
      cookies.remove('userInfo')
      // ask joel about the rest
      router.push({name: 'login'})
      // location.reload()

//       path: '/logout',
// name: 'logout',
// component: () => import('@/views/HomeView.vue'),
// beforeEnter(to, from, next) { 
//   useCookies.remove('userInfo'); // Remove the cookie

//   // Redirect to login page after removing the cookie
//   next({ name: 'login' });
// }
    }
  },
  {
    path:'/user',
    name:'user',
    component: UserDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

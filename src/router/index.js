import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import TablaDataViewsCrud from '../views/TablaDataViews.vue'
import BrandingCompontsPage from '../components/BrandingComponents.vue'
import TablaCrudData from '../components/TablaCrud.vue'
import DashboardViewNav from '../views/DashboardView.vue'
import LandingPageViews from '../views/LandingPage.vue'
import SidebarNav from '../components/SidebarNav.vue'
import LoginCompViews from '../components/LoginComponents.vue'
import NotFound from '../views/404Views.vue'

const routes = [
  
  {
    path: '/brandingCompontspage',
    name: 'BrandingCompontsPage',
    component: BrandingCompontsPage
  },
  {
    path: '/tabladataviewscrud',
    name: 'TablaDataViewsCrud',
    component: TablaDataViewsCrud
  },
  {
    path: '/tablacruddata',
    name: 'TablaCrudData',
    component: TablaCrudData
  },
  {
    path: '/dashboard',
    name: 'DashboardViewNav',
    component: DashboardViewNav
  },
  {
    path: '/login',
    name: 'LandingPageViews',
    component: LandingPageViews
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '',
    name: 'LoginCompViews',
    component: LoginCompViews
  },
  {
    path: '',
    name: 'SidebarNavWies',
    component: SidebarNav
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

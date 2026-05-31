import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import EventsView from './views/EventsView.vue'
import GiftCertificatesView from './views/GiftCertificatesView.vue'
import MonthlyGivingView from './views/MonthlyGivingView.vue'
import DonateView from './views/DonateView.vue'
import BallView from './views/BallView.vue'
import LoginView from './views/LoginView.vue'
import Book1View from './views/Book1View.vue'
import Book2View from './views/Book2View.vue'
import './assets/global.css'

const routes = [
  { path: '/', redirect: '/events' },
  { path: '/events', component: EventsView },
  { path: '/gift-certificates', component: GiftCertificatesView },
  { path: '/monthly-giving', component: MonthlyGivingView },
  { path: '/donate', component: DonateView },
  { path: '/ball', component: BallView },
  { path: '/login', component: LoginView },
  { path: '/book1', component: Book1View },
  { path: '/book2', component: Book2View },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')

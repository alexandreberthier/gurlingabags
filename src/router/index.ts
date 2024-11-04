import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import FaqView from "@/views/FaqView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutLayout from "@/views/checkout/CheckoutLayout.vue";
import PersonalData from "@/views/checkout/PersonalData.vue";
import DeliveryData from "@/views/checkout/DeliveryData.vue";
import Payment from "@/views/checkout/Payment.vue";
import OrderConfirmation from "@/views/checkout/OrderConfirmation.vue";
import ProductDetails from "@/views/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ueberuns',
      name: 'about',
      component: AboutView
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: ProductDetails,
      props: true
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: FaqView
    },
    {
      path: '/warenkorb',
      name: 'cart',
      component: CartView
    },
    {
      path: '/bestellung',
      name: 'checkout',
      component: CheckoutLayout,
      children: [
        {
          path: 'persoenliche-daten',
          name: 'personal-data',
          component: PersonalData
        },
        {
          path: 'lieferung-daten',
          name: 'delivery-data',
          component: DeliveryData
        },
        {
          path: 'bezahlung',
          name: 'payment',
          component: Payment
        },
        {
          path: 'bestaetigung',
          name: 'order-confirm',
          component: OrderConfirmation
        },
      ]
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        return {
          el: element,
          behavior: 'smooth',
        };
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0, behavior: 'smooth' };
    }
  },
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'
import Error404 from '@/components/ErrorView.vue'
const RouterLayout = createRouterLayout(layout => {
  console.debug(layout)
  return import('./layouts/' + layout + '.vue')
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: [...routes, 
        {
          path: '/:pathMatch(.*)*',
          component: Error404
        },
      ]
    },
  ]
})

export default router

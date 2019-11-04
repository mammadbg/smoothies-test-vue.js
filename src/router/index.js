import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Methods from '@/components/Methods'
import Fm from '@/components/Fm'
import AddSmoothie from '@/components/AddSmoothie'
import Test from '@/components/Test'
import EditSmoothie from '@/components/EditSmoothie'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/methods',
      name: 'Methods',
      component: Methods
    },
    {
      path: '/fm',
      name: 'Fm',
      component: Fm
    },
    {
      path: '/AddSmoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: EditSmoothie
    },
    
  ]
})


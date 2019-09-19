// 引入对应的五个路由组件
// 引入首页路由组件
import Home from '../pages/Home/Home.vue'
// 引入分类路由组件
import Classify from '../pages/Classify/Classify.vue'
// 引入识图路由组件
import Konw from '../pages/Know/Konw.vue'
// 引入购物车路由组件
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
// 引入个人路由组件
import Personsge from '../pages/Personsge/Personsge.vue'
// 配置路由
export default [{
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/konw',
    component: Konw
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/personsge',
    component: Personsge
  },
  {
    path: '/',
    redirect: '/home'
  }
]

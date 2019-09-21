// 引入对应的五个路由组件
// 引入首页路由组件
const Home = () => import('../pages/Home/Home.vue')
// 引入分类路由组件
const Classify = () => import('../pages/Classify/Classify.vue')
// 引入识图路由组件
const Konw = () => import('../pages/Know/Konw.vue')
// 引入购物车路由组件
const ShoppingCart = () => import('../pages/ShoppingCart/ShoppingCart.vue')
// 引入个人路由组件
const Personsge = () => import('../pages/Personsge/Personsge.vue')
// 引入登录路由组件
const Login = () => import('../pages/Login/Login.vue')
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
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home'
  }
]

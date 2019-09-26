// 引入对应的五个路由组件
// 引入首页路由组件
const Home = () => import('../pages/Home/Home.vue')
// 引入分类路由组件
const Classify = () => import('../pages/Classify/Classify.vue')
// 分类子路由
const ShopList = () => import('../pages/ShopList/ShopList.vue')
// 引入识图路由组件
const Konw = () => import('../pages/Know/Konw.vue')
// 引入购物车路由组件
const ShoppingCart = () => import('../pages/ShoppingCart/ShoppingCart.vue')
// 引入个人路由组件
const Personsge = () => import('../pages/Personsge/Personsge.vue')
// 引入登录路由组件
const Login = () => import('../pages/Login/Login.vue')
// 引入手机号登录界面
const Iphone = () => import('../pages/Iphone/Iphone.vue')
// 引入搜索界面路由
const Search = () => import('../pages/Search/Search.vue')
// 配置路由
export default [{
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {

    path: '/classify',
    component: Classify,
    children: [{
      name: 'ShopList',
      path: '/classify/shopList',
      component: ShopList,
      meta: {
        isShow: true
      }
    }],
    meta: {
      isShow: true
    }
  },
  {
    path: '/konw',
    component: Konw,
    meta: {
      isShow: true
    }
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart,
    meta: {
      isShow: true
    }
  },
  {
    path: '/personsge',
    component: Personsge,
    meta: {
      isShow: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShow: false
    }
  },
  {
    path: '/iphone',
    component: Iphone
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]

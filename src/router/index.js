import Vue from 'vue'
import Router from 'vue-router'


const components = {
  Home:()=>import('@/views/home.vue'),
  Login:()=>import('@/views/login.vue'),
  News:()=>import('@/views/news.vue'),
  My:()=>import('@/views/my.vue'),
  NewDetails:()=>import('@/views/newDetails.vue'),
}

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta:{
        title:"登录"
      },
      component: components.Login
    },
    {
      path: '/',
      redirect:'/home',
      component:()=>import('@/views/layout.vue'),
      children:[   
        { 
          path: 'home',
          name:'首页',
          component: components.Home
        },
       
       
       {
        path: '/news',
        name: '新闻早知道',
        meta:{
          title:"通知早知道"
        },
        component: components.News
      },
      {
        path: '/newDetails/:id',
        name: '新闻详情',
        meta:{
          title:"新闻详情"
        },
        component: components.NewDetails
      },
      {
        path: '/my',
        name: '我的党建',
        meta:{
          title:"我的党建"
        },
        component: components.My
      },
     
      ]
    },
    
    
    
  ]
})

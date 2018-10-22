import Vue from 'vue'
import Router from 'vue-router'
import { type } from 'os';


const components = {
  Home:()=>import('@/views/home.vue'),
  Login:()=>import('@/views/login.vue'),
  News:()=>import('@/views/news.vue'),
  My:()=>import('@/views/my.vue'),
  NewDetails:()=>import('@/views/newDetails.vue'),
  newsviews:()=>import('@/views/newsviews.vue'),
  handlife:()=>import('@/views/handlife.vue'),
  layout2:()=>import('@/views/layout2.vue'),
  maps:()=>import('@/views/maps.vue'),
}

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/personalDetails',
      meta:{
        name: 'personalDetails',
        desc:'个人信息',
      },
      component:()=>import('@/views/personalDetails.vue'),
    },
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
          desc:'首页',
          component: components.Home
        },
       
       
       {
        path: '/news',
        name: '新闻早知道',
        meta:{
          title:"通知早知道",
          desc:'通知早知道'
        },
        component: components.News
      },
      {
        path: '/my',
        name: 'my',
        meta:{
          title:"我的党建",
          desc:'我的党建'
        },
        component: components.My
      },
    ],
    
  },
  {
    path:'/layout2',
    component: components.layout2,
    children:[
      {
        path: '/handlife',
        name: 'handlife',
        meta:{
          title:"掌上组织生活",
          desc:'掌上组织生活'
        },
        component: components.handlife
      },
      {
        path: '/scoredetail',
        name: 'scoredetail',
        meta:{
          title:"积分详情",
          desc:'积分详情'
        },
        component: ()=>import ( '@/views/scoredetail')
      },
      {
        path: '/yunhudong',
        name: 'yunhudong',
        meta:{
          title:"党员云互动",
          desc:'党员云互动'
        },
        component: ()=>import ( '@/views/yunhudong')
      },
      {
        path: '/anyphoto',
        meta:{
          name: 'anyphoto',
          desc:'随时随地拍',
          type:7
        },
        component:()=>import('@/views/anyphoto.vue'),
      },
      {
        path: '/uploadimg',
        meta:{
          name: 'uploadimg',
          desc:'上传图片',
        },
        component:()=>import('@/components/uploadimg.vue'),
      },
      {
        path: '/score',
        meta:{
          name: 'score',
          desc:'个人量化积分',
        },
        component:()=>import('@/views/score.vue'),
      },
      {
        path: '/editPassword',
        meta:{
          name: 'editPassword',
          desc:'修改密码',
        },
        component:()=>import('@/views/editPassword.vue'),
      },
      {
        path: '/paymoney',
        meta:{
          name: 'paymoney',
          desc:'党费缴纳',
        },
        component:()=>import('@/views/paymoney.vue'),
      },
      
      {
        path: '/report',
        meta:{
          name: 'report',
          desc:'思想汇报'
        },
        component:()=>import('@/views/report.vue'),
      },
      {
        path: '/Today',
        meta:{
          name: 'Today',
          desc:'党史上的今天'
        },
        component:()=>import('@/views/Today.vue'),
      },
      {
        path: '/mysummary',
        meta:{
          name: 'mysummary',
          desc:'个人总结'
        },
        component:()=>import('@/views/mysummary.vue'),
      },
      {
        path: '/summary',
        meta:{
          name: 'summary',
          desc:'心得总结'
        },
        component:()=>import('@/views/report.vue'),
      },
      {
        path: '/democratic',
        meta:{
          name: 'democratic',
          desc:'民主评议'
        },
        component:()=>import('@/views/democratic.vue'),
      },
      {
        path: '/maps',
        meta:{
          name: 'maps',
          desc:'流动党员找组织'
        },
        component: components.maps,
      },
    ]

  },
 
      {
        path: '/newDetails/:id',
        name: '新闻详情',
        meta:{
          title:"新闻详情",
          desc:'新闻详情'
        },
        component: components.NewDetails
      },
      {
        path: '/newsviews',
        name: '新闻列表',
        meta:{
          type:'',
        },
        component: components.newList
      },
      {
        path: '/neweyes',
        meta:{
          name: 'neweyes',
          desc:'信工新闻眼',
          type:0
        },
        component: components.newsviews
      },
      {
        path: '/oneclick',
        meta:{
          name: 'oneclick',
          desc:'党建一点通',
          type:3
        },
        component: components.newsviews
      },
      {
        path: '/know',
        meta:{
          name: 'know',
          desc:'通知早知道',
          type:2
        },
        component: components.newsviews
      },
      {
        path: '/showrank',
        meta:{
          name: 'showrank',
          desc:'党员亮身份',
          type:5
        },
        component: components.newsviews
      },
      {
        path: '/activity',
        meta:{
          name: 'activity',
          desc:'特色活动',
          type:1
        },
        component: components.newsviews
      },
      {
        path: '/today',
        meta:{
          name: 'today',
          desc:'党史上的今天',
        },
        component: components.NewDetails
      },
      {
        path: '/system',
        meta:{
          name: 'system',
          desc:'制度建设',
          type:4
        },
        component: components.newsviews
      },
      {
        path: '/anystudy',
        meta:{
          name: 'anystudy',
          desc:'随时随地学',
          type:6
        },
        component: components.newsviews
      },
      {
        path: '/politicsStudy',
        meta:{
          name: 'politicsStudy',
          desc:'政治学习',
          type:8

        },
        component: components.newsviews
      },
      

    
    
    
  ]
})

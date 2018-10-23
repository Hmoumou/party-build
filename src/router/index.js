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
  layouttwo:()=>import('@/views/layout2.vue'),
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
          name:'home',
         meta:{
          desc:'首页',
         },
          component: components.Home
        },
       
       
       {
        path: '/news',
        name: 'news',
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
    path:'/layouttwo',
    name:'layouttwo',
    component: components.layouttwo,
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
          title:"yunhudong",
          desc:'党员云互动'
        },
        component: ()=>import ( '@/views/yunhudong')
      },
      {
        path: '/hudongdetails',
        name: 'hudongdetails',
        meta:{
          title:"hudongdetails",
          desc:'党员云互动'
        },
        component: ()=>import ( '@/views/hudongdetails')
      },
      {
        path: '/anyphoto',
        name: 'anyphoto',
        meta:{
         
          desc:'随时随地拍',
          type:7
        },
        component:()=>import('@/views/anyphoto.vue'),
      },
      {
        path: '/uploadimg',
        name: 'uploadimg',
        meta:{
         
          desc:'上传图片',
        },
        component:()=>import('@/components/uploadimg.vue'),
      },
      {
        path: '/score',
        name: 'score',
        meta:{
          
          desc:'个人量化积分',
        },
        component:()=>import('@/views/score.vue'),
      },
      {
        path: '/editPassword',
        name: 'editPassword',
        meta:{
         
          desc:'修改密码',
        },
        component:()=>import('@/views/editPassword.vue'),
      },
      {
        path: '/paymoney',
        name: 'paymoney',
        meta:{
          
          desc:'党费缴纳',
        },
        component:()=>import('@/views/paymoney.vue'),
      },
      
      {
        path: '/report',
        name: 'report',
        meta:{
          
          desc:'思想汇报'
        },
        component:()=>import('@/views/report.vue'),
      },
      {
        path: '/Today',
        name: 'Today',
        meta:{
          
          desc:'党史上的今天'
        },
        component:()=>import('@/views/Today.vue'),
      },
      {
        path: '/mysummary',
        name: 'mysummary',
        meta:{
          
          desc:'个人总结'
        },
        component:()=>import('@/views/mysummary.vue'),
      },
      {
        path: '/summary',
        name: 'summary',
        meta:{
          
          desc:'心得总结'
        },
        component:()=>import('@/views/report.vue'),
      },
      {
        path: '/democratic',
        name: 'democratic',
        meta:{
         
          desc:'民主评议'
        },
        component:()=>import('@/views/democratic.vue'),
      },
      {
        path: '/maps',
        name: 'maps',
        meta:{
          
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
        name: 'neweyes',
        meta:{
          
          desc:'信工新闻眼',
          type:0
        },
        component: components.newsviews
      },
      {
        path: '/oneclick',
         name: 'oneclick',
        meta:{
         
          desc:'党建一点通',
          type:3
        },
        component: components.newsviews
      },
      {
        path: '/know',
        name: 'know',
        meta:{
          
          desc:'通知早知道',
          type:2
        },
        component: components.newsviews
      },
      {
        path: '/showrank',
        name: 'showrank',
        meta:{
         
          desc:'党员亮身份',
          type:5
        },
        component: components.newsviews
      },
      {
        path: '/activity',
        name: 'activity',
        meta:{
          
          desc:'特色活动',
          type:1
        },
        component: components.newsviews
      },
      {
        path: '/today',
        name: 'today',
        meta:{
         
          desc:'党史上的今天',
        },
        component: components.NewDetails
      },
      {
        path: '/system',
        name: 'system',
        meta:{
          
          desc:'制度建设',
          type:4
        },
        component: components.newsviews
      },
      {
        path: '/anystudy',
        name: 'anystudy',
        meta:{
          
          desc:'随时随地学',
          type:6
        },
        component: components.newsviews
      },
      {
        path: '/politicsStudy',
        name: 'politicsStudy',
        meta:{
         
          desc:'政治学习',
          type:8

        },
        component: components.newsviews
      },
      

    
    
    
  ]
})

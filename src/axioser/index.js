import axios from 'axios'
import {proxyapi} from '../staticData/proxyapi'
//axios.defaults.baseURL = 'http://www.gxgzjt.com'
//axios.defaults.baseURL = '/'
axios.defaults.baseURL = proxyapi

//多页面公用不了所以这里处理登录逻辑
var instance =axios.create({
  timeout:5000,//超时就结束
  headers:{'Content-Type':'application/json;charset=UTF-8'}
})
//统一拦截，判断是否登录
//request 拦截器
instance.interceptors.request.use(config=>{
  let token=window.sessionStorage.getItem('token');
  //相当于每次都带着身份证回服务器
  if(token){
    config.headers.Authorization=`token ${token}`
  }
  /* if(store.state.token){
       config.headers.Authorization=`token ${store.state.token}`
   }*/
  return config;
})

//response 拦截器
instance.interceptors.response.use(
  response=>{
    return response;
  },
  error=>{ //默认除了2XX之外的都是错误的，就会走这里
    if(error.response){
      switch(error.response.status){
        case 401:
          //记住query
          let query=window.location.search;
          window.location.href='./login'+query;
        //登录过期,清楚token
        //store.dispatch('UserLogout');
        /* router.replace({
             path:'login',
             //跳回原页面
             query:{
                 redirect:router.currentRoute.fullPath
             }
         })*/
      }
    }
    return Promise.reject(error.response)
  }
)

export default instance;


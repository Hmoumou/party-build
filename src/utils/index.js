import axios from 'axios'
const  qs = require('qs')

const env = process.env.NODE_ENV
let baseURL = env == "development" ? '/api':'/'
let instance = axios.create({
    baseURL :"http://211.67.177.56:8080",
    timeout:15000
})
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(window.sessionStorage.vuex){
        let token = JSON.parse(window.sessionStorage.vuex).token
        config.headers.token = token
    }
    console.log(config);
    
    if(config.method == 'post'){
        //JSON把数据转成formdata格式
        config.data = qs.stringify(config.data)
    }
   
    return config;
   
    
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params:data},config).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },


    fetch(url,data,config,methods){
        return new Promise((resolve,reject)=>{
            instance[methods](url, data, config ).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.post(url,data,config).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
}

export default xhr

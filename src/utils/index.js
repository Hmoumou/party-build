import axios from 'axios'

const env = process.env.NODE_ENV
let baseURL = env == "development" ? '/api':'/'
let instance = axios.create({
    baseURL :"http://211.67.177.56:8080",
    timeout:15000
})

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
    post(url, data, config){
        this.fetch(url,data,config,'post')
    }
}

export default xhr

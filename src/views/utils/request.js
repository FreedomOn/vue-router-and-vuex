import axios from 'axios'
import {  Message } from 'element-ui'
import qs from 'qs'
// 创建一个axios实例
const service = axios.create({
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    console.log(config)
    /*
      判断  post请求需增加qs转化
    */ 
   if(config.method === 'post'){
     config.data = qs.stringify(config.data)
   }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

//respone拦截器
service.interceptors.response.use(
 
  response => {
    const res = response.data
    // 成功
    // res =>res.status === 200 ? Promise.resolve(res):Promise.reject(res)
    console.log(res)
    return res
  },
//   失败
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

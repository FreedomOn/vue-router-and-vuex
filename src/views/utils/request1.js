import axios from 'axios'
import {
  Message
} from 'element-ui'
import qs from 'qs'
import crypto from './crypto.js'
// 创建一个axios实例
const service = axios.create({
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
   
    /*
      判断  post请求需增加qs转化
    */
    if (config.method === 'post') {
      //  config.data = qs.stringify(config.data)
      //在接口请求的拦截器中添加 加密  
      config.data =  crypto.encrypt(config.data)
      console.log(config.data,'加密')
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
    // const res = response.data
    // 请求成之后进行接口统一解密
    response.data = JSON.parse(crypto.decrypt(response.data))
    console.log(res,'ressss')
    return response
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

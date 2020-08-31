import request from '@/views/utils/request'

export function login11(logindata) {
  return new Promise ((resolve,reject) => {
    request({
      method: 'post',
      url:'http://admintest.happymmall.com/manage/user/login.do', 
      data: logindata
    }).then((val) => {
      resolve(val)
    }).catch((err) => {
       reject(err)
    })
  })
}
// 加密login
export function login(postdata) {
  return new Promise ((resolve,reject) => {
    request({
      method: 'post',
      url:'http://172.30.53.6:8080/api/login', 
      data: JSON.stringify(postdata)
    }).then((val) => {
      resolve(val)
    }).catch((err) => {
       reject(err)
    })
  })
}
// 测试login
export function cwshilogin(postdata) {
  return new Promise ((resolve,reject) => {
    request({
      method: 'post',
      url:'api/login', 
      data: postdata
    }).then((val) => {
      resolve(val.data)
    }).catch((err) => {
       reject(err)
    })
  })
}


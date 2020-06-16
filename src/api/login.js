import request from '@/views/utils/request'

export function login(logindata) {
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
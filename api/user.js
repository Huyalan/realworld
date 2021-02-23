import {request} from '../utils/request'

const login=function(data){
  return request({
    method:'POST',
    url:'/api/users/login',
    data
  })
}

const register=function(data){
  return request({
    method:'POST',
    url:'/api/users',
    data
  })
}

export {
  login,
  register
}
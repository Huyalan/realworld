import {request} from '../utils/request'

//登陆
const login=function(data){
  return request({
    method:'POST',
    url:'/api/users/login',
    data
  })
}

//注册
const register=function(data){
  return request({
    method:'POST',
    url:'/api/users',
    data
  })
}

//获取登陆用户信息
const getCurrentUser=function(params){
  return request({
    method:'GET',
    url:'/api/user',
    params
  })
}

//更新用户信息
const updateUserInfo=function(data){
  return request({
    method:'PUT',
    url:'/api/user',
    data
  })
}

//关注用户
const focusOnUser=function(slug){
  return request({
    method:'POST',
    url:`/api/profiles/${slug}/follow`
  })
}

//取关用户
const takeOffUser=function(slug){
  return request({
    method:'DELETE',
    url:`/api/profiles/${slug}/follow`
  })
}

//获取用户信息
const getProfiles=function(slug){
  return request({
    method:'GET',
    url:`/api/profiles/${slug}`
  })
}

export {
  login,
  register,
  getCurrentUser,
  updateUserInfo,
  focusOnUser,
  takeOffUser,
  getProfiles
}
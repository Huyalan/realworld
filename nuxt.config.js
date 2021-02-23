/** 
 * Nuxt.js配置文件
 */

 module.exports={
  router:{
    extendRoutes(routes,resolve){
      routes.push({
        path: '/register',
        name: 'register',
        component: resolve(__dirname, 'pages/login/')
      })
     }
  },
  server:{
    host:'0.0.0.0',
    port:'3389'
  },
  plugins:[
    '~/utils/request.js',
    '~/utils/dayjs.js'
  ]
 }
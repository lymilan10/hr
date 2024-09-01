const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//通过配置代理，解决前后端跨域问题
let proxyObj={}
proxyObj['/']={
    ws:false,
    // 转发到后端
    target:'http://localhost:8081',
    changeOrigin:true,
    pathRewrite:{
        '^/':'/'
    }
}

module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:proxyObj
    }
}

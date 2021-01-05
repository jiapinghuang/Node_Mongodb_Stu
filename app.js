const http=require('http')
require('./model/connect.js') //不需要变量接收
const template=require('art-template')//引入模板引擎
const path=require('path')
const serveStatic=require('serve-static');//引入静态资源服务功能
const dateFormat=require('dateformat');
const router=require('./router/index.js') //引入路由模块js

//实现静态资源访问服务，返回方法
const serve=serveStatic(path.join(__dirname,'public'))
//配置模板根目录
template.defaults.root=path.join(__dirname,'views')
//日期处理格式，可在模板使用
template.defaults.imports.dateformat=dateFormat
const app=http.createServer();//服务器
//当客户端请求服务器时，
app.on('request',(req,res)=>{
	//使用路由，判断好后去调用路由
	router(req,res,()=>{
		console.log('1') //必填的回调函数
	});
	serve(req,res,()=>{
		//启用静态资源功能
	})
});
//必须监听端口
app.listen('80')
//运行node app.js
console.log('服务器启动成功')

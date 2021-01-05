const Student=require('../model/user.js')//希望接收到构造函数，用变量接收
const getRouter=require('router')//先install 引入路由模块
const router=getRouter();//获取路由对象
const template=require('art-template')//引入模板引擎
const queryString=require('querystring')
//响应路由
router.get('/add',(req,res)=>{
	//添加学生
	let html=template('index.art',{})
	res.end(html);//响应给客户端
})

router.get('/list',async (req,res)=>{
	//展示学生
	let Stus= await Student.find();//查找所有学生
	console.log(Stus)
	let html=template('list.art',{
		Stus:Stus
	})
	res.end(html)
})

//实现学生信息添加
router.post('/add',(req,res)=>{
	//接收post数据
	let formDate=''
	req.on('data',param=>{
		formDate+=param
	})
	//请求参数
	req.on('end',async ()=>{  //async变成异步函数
		Student.create(queryString.parse(formDate))//使用Student创建数据
		res.writeHead(301,{
			Location:'/list'  //重定向
		})
		res.end()//结束请求
	})
})
module.exports=router
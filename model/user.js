const mongoose=require('mongoose');
//创建集合规则
const Student=new mongoose.Schema({
	name:{
		type:String,
		required:true,
		minlength:2
	},
	age:{
		type:Number,
		required:true,
		minlength:1
	},
	sex:{
		type:String,
		required:true
	},
	email:String,
	hobby:[ String ],
	college:String,
	enterDate:{
		type:Date,
		default:Date.now
	}
})

//使用规则创建集合
const Stu= mongoose.model('Student',Student);

//导出模块
module.exports=Stu

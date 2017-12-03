
var _ = require('lodash');


const gethotreducer = (state={},info)=>{
	let {type,payload} = info;
	switch(type){
		case "hotlist":
			return payload;
		default:
			return state;
	}
}


const getnewreducer = (state={},info)=>{
	let {type,payload} =info;
	switch(type){
		case "newlist":

			return payload;
		default :
			return state; 
	}

}

const detailreducer = (state={},info)=>{
	let {type,payload} = info;
	switch(type){
		case "detaillist":

			return payload;
		default :
			return state; 
	}
}
const goodsdetailreducer = (state={},info)=>{
	let {type,payload} = info;
	switch(type){
		case "goodsdetail":

			return payload;
		default :
			return state; 
	}
}
const commentreducer = (state={},info)=>{
	let {type,payload} = info;
	switch(type){
		case "commentlist":

			return payload;
		default :
			return state; 
	}
}

const cartgoodreducer = (state=[],info)=>{
	let {type,payload} = info;
	switch(type){
		case "cartgood":
			return [...state,payload,payload._id];
			/*var list = [...state,payload];

			var changelist = _.uniqWith(list,_.isEqual)
			//changelist=_.uniq(list)
			console.log(changelist)
			console.log(list)
			_.forEach(changelist,function(val1,index1){
					console.log(val1.num)
         				val1.num=val1.num?val1.num:1;//商品中的num存在的话就赋值当前的num，不存在就赋值1
         				console.log(changelist)
					_.forEach(list,function(val2,index2){
             			console.log(list)
						if(val2._id==val1._id&&index1!=index2){//单个商品的id与所有点击的的商品的id进行对比，相等的话num++
							
							//console.log(index1,index2)
							val1.num+=1;//商品中没有num属性，val1.num 就是给商品添加一个num属性，并计算
							//val1.sum=parseFloat(val1.num*val2.LQTaobaoItem.ShowPrice).toFixed(2)//计算单个商品的总价
						}
					})
				})

				list=[...changelist];//将去重的数组的商品的信息（包括添加的num,sum属性）赋值给 	
	 	   //return [...list];
	 	   return [...list]*/
		default :
			return state; 
	}
}

const handlecartreducer = (state=[],info)=>{
	let {type,payload} = info;
	switch(type){
		case "shopcart":
			return [...payload];
		default :
			return state; 
	}
}
export {gethotreducer,getnewreducer,detailreducer,goodsdetailreducer,commentreducer,cartgoodreducer,handlecartreducer};

// reducer 的设计必须是一个纯函数
// 
// 只要每次给定相同的输入值，就一定会得到相同的输出值: 例如传入1与2，就一定会得到3
// 不会改变原始输入参数，或是外部的环境，所以没有副作用
// 不依頼其他外部的状态，变量或常量


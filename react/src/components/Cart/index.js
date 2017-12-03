import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
var _ = require('lodash');
class Cart extends React.Component{
	constructor(){
		super();
		this.state={
			inputnum:1
		}
	}
	/*increasenum(e){
		//console.log(e.currentTarget.getAttribute('data-idx'))
		var idx = e.currentTarget.getAttribute('data-idx')
		//console.log(document.getElementsByClassName('changenum')[idx].value)
		console.log(this.refs.changegoodnum.value)
		this.refs.changegoodnum.value++

	}*/
	render(){
		 const {cartlist,detaillist} = this.props;
		var cartsList = _.uniqWith(cartlist,_.isEqual)
		console.log(cartsList)
		function getCartNum(cartsList,matchdata){
			var num = 0;
			for(let i = 0;i<cartlist.length;i++){
				if(cartlist[i]===matchdata){
					num++
				}
			}
			return num;
		}

		var output = [];
        for(let i=0;i<cartsList.length;i++){ 
        	//console.log(cartsList[i].title)
        		if(cartsList[i].title===undefined && cartsList[i].price===undefined && cartsList[i].imgUrl===undefined){
        			//return i
        			console.log(cartsList[i])
        		}else{
        		output.push(

		            	<li key={i} className="cartlist">        	
		            		<div className="cartlist-left">
								<img src={cartsList[i].imgUrl}/>
								</div>
								<div className="cartlist-right">
									<div className="cartlist-top">
										<div className="cartlist-title">{cartsList[i].title}</div>
										<i className="iconfont icon-delete"></i>
									</div>
									<div className="cartlist-bottom">
										<div className="cartlist-price"><span>￥</span>{cartsList[i].price}</div>
										<div className="cartlist-input">
											
											<input type="text" className="changenum" ref="changegoodnum" defaultValue={getCartNum(cartlist,cartsList[i]._id)}/>
											
										</div>
									</div>
							</div>
		            	</li>

            		)
        		
        	console.log(cartsList,getCartNum(cartlist,cartsList[i]._id))
            }
        }
		return <div>
			<div className="detailhead">
				<NavLink to="/home"><i className="iconfont icon-back"></i></NavLink>
				<span className="detailhead-word">购物车</span>
				<NavLink to="/home"><i className="iconfont icon-viewgallery"></i></NavLink>
			</div>
			<ul className="cart">
				{output}
			</ul>
			{
				this.props.children
			}
		</div>
	}

}

export default connect(
	(state)=>{
		return{
			cartlist:state.cartgood,
			detaillist:state.detail,
			shopcar:state.shopcar
		}
	},
	{
		handleshopcar:()=>{
			return axios.get('/api/goodsdetail',{
				params:{
					id:id
				}
			}).then(res=>{
				console.log(res.data)
				return {
					type:"shopcart",
					payload:res.data
				}
			})
		}
	}

	)(Cart);















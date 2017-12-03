import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import qs from 'qs';
import ReactSwipe from 'react-swipe';
class Goodsdetail extends React.Component{
	constructor(){
		super();
		this.state={
			goodsdetaillist:null
		}
	}


	componentDidMount() {
		var goodsdetailid = this.props.match.params.id
		console.log(goodsdetailid)
		this.props.getgoodsdetail(goodsdetailid)
	}

	render(){
		return <div>
			<div className="detailhead">
				<a onClick={this.handleClick.bind(this,this.props.match.params.id)}><i className="iconfont icon-back"></i></a>
				<span className="detailhead-word">图文详情</span>
				<NavLink to="/home"><i className="iconfont icon-viewgallery"></i></NavLink>
			</div>
			<div className="goodsmain">
			<div className="goodsword"><p className="goodsword-left">商品详情</p><p className="goodsword-right">{this.props.goodsdetaillist.detail}</p></div>
				<div className="goodsimg">
					{
						this.props.goodsdetaillist.goodsimg?
						this.props.goodsdetaillist.goodsimg.map(item=>
							<img src={item.imgurl} key={item.id}/>
						)
						:null
					}
				</div>
			</div>
			{
				this.props.children
			}
		</div>
	}

	handleClick(id){
		this.props.history.push(`/detail/${id}`)
	}
}

export default connect(
	(state)=>{
		return {
			goodsdetaillist:state.goodsdetail
		}
	},
	{
		getgoodsdetail:(goodsdetailid)=>{
			console.log(goodsdetailid)
			return axios.get('/api/goodsdetail',{
				params:{
					id:goodsdetailid                                           
				}				
			}).then(res=>{
				console.log(res.data[0])
				return {
					type:"goodsdetail",
					payload:res.data[0]
				}
			})

		}
	}

	)(Goodsdetail);




/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */



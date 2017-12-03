import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import qs from 'qs';
import ReactSwipe from 'react-swipe';
class Detail extends React.Component{
	constructor(){
		super();
		this.state={
			detaillist:null,
			swipeimg:[],
			goodsnum:0,
		}
	}


	componentDidMount() {
		var detailid = this.props.match.params.id
	    this.props.getDetail(detailid);
	    axios.get('/api/detail',{
	    	params:{
	    		id:detailid
	    	}
	    }).then(res=>{
	    	this.setState({
	    		swipeimg:res.data[0].imgList
	    	})
	    })
	}

	render(){
		return <div>
			<div className="detailhead">
				<NavLink to="/home"><i className="iconfont icon-back"></i></NavLink>
				<span className="detailhead-word">商品详情</span>
				<NavLink to="/home"><i className="iconfont icon-viewgallery"></i></NavLink>
			</div>
			<div className="main">
				<div className="detail-swipe">
					<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000}} key={this.state.swipeimg.length}>
		                {
		                	this.state.swipeimg.map(item=>
		                		<img src={item.imgurl} key={item.id}/>
		                	)
		                }
           			 </ReactSwipe>
				</div>

			    <div className="show">			    	
			    	<div className="price">
			    		<p>{this.props.detaillist.price}</p>
			    		<div className="show-title">{this.props.detaillist.title}</div>
			    	</div>
			    </div>
		    	<p className="shuoming">特别说明：苹果公司不是好运购赞助商，并且苹果公司也不会以任何形式参与其中！</p>
		    	<ul>
		    		<li onClick={this.handleClick.bind(this,this.props.detaillist._id)}>图文详情<span>(建议在wifi下查看)</span><i className="iconfont icon-more"></i></li>
			    	<li className="last" onClick={this.handelcomment.bind(this,this.props.detaillist._id)}>晒单评论<i className="iconfont icon-more"></i></li>
		    	</ul>		    		    
			</div>

			<div className="buy">
				<p onClick={this.props.handleCart.bind(this,this.props.detaillist)}><NavLink to="/cart">立即购买</NavLink></p>	    	
		    </div>
		</div>
	}

	handleClick(id){
		this.props.history.push(`/goodsdetail/${id}`)
	}
	handelcomment(id){
		this.props.history.push(`/comment/${id}`)
	}
	
}

export default connect(
	(state)=>{
		console.log(state)
		return {
			detaillist:state.detail,
			swipeimg:state.detail.imgList
		}			
	},
	{
		getDetail:(detailid)=>{
			console.log(detailid)
			return axios.get('/api/detail',{
				params:{
					id:detailid
				}				
			}).then(res=>{
				console.log(res.data[0])
				return {
					type:"detaillist",
					payload:res.data[0]
				}
			})
		},
		handleCart:(detail)=>{
			return {
				type:"cartgood",
				payload:detail
			}
		}
	}


	)(Detail);

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */



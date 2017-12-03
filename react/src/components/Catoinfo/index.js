import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';

class Catoinfo extends React.Component{
	constructor(){
		super();
		this.state={
			catoinfolist:[]
		}
	}


	componentWillMount() {
		var catoinfo = this.props.match.params.cato
	    axios.get('/api/catoinfo',{
	    	params:{
	    		catoinfo:catoinfo
	    	}
	    }).then(res=>{
	    	this.setState({
	    		catoinfolist:res.data
	    	})
	    })
	}

	render(){
		return <div>
			<div className="catoinfotop">
				<NavLink to="/catolog"><i className="iconfont icon-back"></i></NavLink>
				<h1>{this.props.match.params.cato}</h1>
			</div>
			<div className="catoinfocontent">
				<p className="num">共<span>{this.state.catoinfolist.length}</span>件商品</p>
				{
					/*<p  className="kong">暂无商品</p>*/
				}
				
				<ul className="catoinfolist">
				{
					this.state.catoinfolist.map(item=>
						<li key={item._id}>
							<div className="catoinfopic">
								<img src={item.imgUrl}/>
							</div>
							<div className="catoinforight">
								<div className="catoinfotitle">{item.title}</div>
								<p>商品总价<span>{item.price}</span>元</p>
							</div>
						</li>
					)
				}				
				</ul>
		</div>	
				
		</div>
	}
}

export default Catoinfo;

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */



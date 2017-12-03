import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';

class Search extends React.Component{
	constructor(){
		super();
		this.state={
			searchlist:[]
		}
	}


	componentWillMount() {
	    console.log(localStorage.getItem('searchgoods'))
	    var searchgoods = localStorage.getItem('searchgoods')
	    axios.get('/api/search',{
	    	params:{
	    		searchgoods:searchgoods
	    	}
	    }).then(res=>{
	    	console.log(res.data)
	    	this.setState({
	    		searchlist:res.data
	    	})
	    })
	}

	render(){
		return <div>
			<div className="detailhead">
				<NavLink to="/home"><i className="iconfont icon-back"></i></NavLink>
				<span className="detailhead-word">搜索页</span>
				<NavLink to="/home"><i className="iconfont icon-viewgallery"></i></NavLink>
			</div>
			<div className="searchwrap">
			<div className="hotlist">
				<ul>
						{
							this.state.searchlist.map(item=>
							<li key={item._id}>
								<div className="pic">
									<img src={item.imgUrl}/>
									<p>{item.title}</p>
								</div>
								<div className="price">
									<p><span>{item.price}</span>元</p>
								</div>
								<a href="" title="">立即抢购</a>
							</li>
							)
						}				
				</ul>	
			</div>
			</div>
		</div>
	}
}

export default Search;

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */



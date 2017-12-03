import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';

class Catolog extends React.Component{
	constructor(){
		super();
		this.state={
			catologlist:[
					{
    			title:"优选商品"
    		},
    		{
    			title:"地方特产"
    		},
    		{
    			title:"充值卡券"
    		},
    		{
    			title:"家用电器"
    		},
    		{
    			title:"手机平板"
    		},
    		{
    			title:"电脑数码"
    		},
    		{

    			title:"黄金首饰"
    		},
    		{
    			title:"汽车用品"
    		},
    		{
    			title:"日用百货"
    		},
    		{
    			title:"好运超市"
    		},
    		{
    			title:"潮流时尚"
    		}

			]
		}
	}


	componentWillMount() {
	    
	}

	render(){
		return <div>
				<div className="catologheader">
					<NavLink to="/home"><i className="iconfont icon-back"></i></NavLink>
					<h1>分类</h1>
				</div>
			<div className="catlogli">							
					<div className="catofirst">
					<div className="pic"></div>
						<NavLink to="/home"><p>全部商品</p></NavLink>
					</div>				
					<div className="catosecond">
						<p>分类浏览</p>
					</div>
				<ul className="catolist">
					{
						this.state.catologlist.map((item,index)=>
							<li key={index}>
								<div className="img"><img /></div>
								<div className="word" onClick={this.handleclick.bind(this,item.title)}>{item.title}</div>
							</li>
						)
					}					
				</ul>
			</div>
		</div>
	}
handleclick(cato){
	this.props.history.push(`/catoinfo/${cato}`)
}

}

export default Catolog;

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */



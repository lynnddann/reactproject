import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';


class Me extends React.Component{
	constructor(){
		super();
		this.state={
			
		}
	}


	componentWillMount() {
	    
	}

	render(){
		return <div>
			<div className="memain">
			<div className="meheader">
				<NavLink to="/home/hot"><i className="iconfont icon-back"></i></NavLink>
				<h3>用户登录</h3>
				<NavLink to="/home/hot"><i className="iconfont icon-viewgallery"></i></NavLink>
			</div>
			<div className="content">
				<form action="/api/login" method="post">
					<div className="formcontent">
						<div className="user">
							<label>账号：</label>
							<input type="text" placeholder="请输入您的手机号" id="username" name="username"/>
						</div>
						<div className="pass">
							<label>密码：</label>
							<input type="password" placeholder="请输入密码" id="password" name="password"/>
						</div>
					</div>
          <div className="p1"></div>
					<div  className="btn" >登录</div>

				</form>
				<ul>
					<li className="first"><NavLink to="/register">立即注册</NavLink></li>
					<li className="last">忘记密码</li>
				</ul>
			</div>
		</div>
		</div>
	}
}

export default Me;

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */



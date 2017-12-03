import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';


class Register extends React.Component{
	constructor(){
		super();
		this.state={
			
		}
	}


	componentWillMount() {
	    
	}

	render(){
		return <div>
			<div className="regmain">
		      <div className="regheader">
		      <NavLink to="/me"><i className="iconfont icon-back"></i></NavLink>
		        <h3>注册</h3>
		        <NavLink to="/home"><i className="iconfont icon-viewgallery"></i></NavLink>
		      </div>
		      <div className="regcontent">
		        <form action="/api/register" method="post">
		              <input type="text" placeholder="请输入您的手机号码"  name="username" />
		              <p className="s1"></p>
		              <input type="password" placeholder="请输入6-12位数字或字母"  name="password "  />
		              <p className="s1"></p>
		              <p className="agree"><input type="checkbox"  />我已阅读并同意<span>好运服务条款</span></p>
		            <button type="button" className="nxl">注册</button>
		        </form>
		      </div>
		    </div>
		</div>
	}
}

export default Register;

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */



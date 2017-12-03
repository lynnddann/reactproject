import React from "react";
import "./index.scss";
import axios from "axios"; //cnpm install .....
import "@/assets/iconfont/iconfont.css";  //引入iconfont css
import ReactSwipe from 'react-swipe';
import logo from '@/assets/logo1.png';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
class Home extends React.Component{
	constructor(){
		super();
		this.state={
			
		}
	}

	componentWillMount() {
	  
	}

	handlechange(){
		//console.log(this.refs.inputvalue.value)
		localStorage.setItem('searchgoods',this.refs.inputvalue.value)
	}
	render(){
		return <div>
			<header>
		      <div className="left">
		        <a href="/home"><img src={logo}/></a>
		      </div>
		      <div className="search">
		      		<i className="iconfont icon-search"></i>
					<input type="text" className="searchtext" onChange={this.handlechange.bind(this)}  ref="inputvalue"/>					
		      </div>
		      <div className="searchbtn"><NavLink to="/search">搜索</NavLink></div>	          
    		</header>
    		<div className="swipe">
    			<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
	                <div><img src="https://s3.mogucdn.com/mlcdn/c45406/171123_3jbfhk8c3kh45ifj2283732g9bhel_750x390.jpg_800x9999.v1c7E.70.webp"/></div>
	                <div><img src="https://s3.mogucdn.com/mlcdn/c45406/171122_50ahhj687eh1b372el906e4afl80d_750x390.jpg_800x9999.v1c7E.70.webp"/></div>
	                <div><img src="https://s11.mogucdn.com/mlcdn/c45406/171120_39i3ik274209j8j23h8g1f2c2bb1l_750x390.jpg_800x9999.v1c7E.70.webp"/></div>
	            </ReactSwipe>
    		</div>    
		    <nav>
		      <ul className="navword">
			      <li><i className="you"></i><p>优选商品</p></li>
			      <li><i className="shai"></i><p>晒单</p></li>
		      </ul>
		    </nav>

		    <div className="gonggao">
		        <div className="pic">
		        	<i className="iconfont icon-remind"></i>
		        </div>
		        <div className="user">
		            <ul className="lunboword">
		              <li>用户<span>153****4589</span>【2天前】购买了京东E卡经典卡100面值...</li>
		              <li>用户<span>131****4589</span>【2天前】购买了京东E卡经典卡200面值...</li>
		              <li>用户<span>189****4589</span>【2天前】购买了京东E卡经典卡300面值...</li>
		              <li>用户<span>153****4589</span>【2天前】购买了京东E卡经典卡100面值...</li>
		              <li>用户<span>131****4589</span>【2天前】购买了京东E卡经典卡200面值...</li>
		              <li>用户<span>189****4589</span>【2天前】购买了京东E卡经典卡300面值...</li>
		            </ul>      
		        </div>
		    </div>
		    <div className="navlist">
		        <ul className="navfix">
		        	<li><NavLink to="/home/hot" activeClassName="active">人气</NavLink></li>
		        	<li><NavLink to="/home/new" activeClassName="active">最新</NavLink></li>
		        </ul>      
    		</div>
			{
				this.props.children
			}

			<section>
				<p>特别说明：苹果公司不是好运购赞助商，并且苹果公司也不会以任何形式参与其中</p>
				<p className="fair">
					<i className="first"></i>
					公平公正公开
					<i className="second"></i>
					正品保障
					<i className="third"></i>
					权益保障
				</p>
				<p>版权所有  www.97hyg.com上海朝夜信息技术有限公司</p>
				<p className="last">沪ICP备16017374号－3</p>
			</section>
			<footer>
				<span><i className="footerfirst"></i><p><NavLink to="/home">首页</NavLink></p></span>
				<span><i className="footersecond"></i><p><NavLink to="/catolog">分类</NavLink></p></span>
				<span><i className="footerthird"></i><p><NavLink to="/me">我的</NavLink></p></span>
			</footer>
			<div className="jiantou">
	        	<i className="iconfont icon-less"></i>
	    	</div> 
		</div>
	}
}

export default Home;
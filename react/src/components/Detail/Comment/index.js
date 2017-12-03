import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import qs from 'qs';
import ReactSwipe from 'react-swipe';
class Comment extends React.Component{
	constructor(){
		super();
		this.state={
			commentlist:null
		}
	}


	componentDidMount() {
		var commentid = this.props.match.params.id
		console.log(commentid)
		this.props.getcomment(commentid)
	}

	render(){
		return <div>
			<div className="detailhead">
				<a onClick={this.handleClick.bind(this,this.props.match.params.id)}><i className="iconfont icon-back"></i></a>
				<span className="detailhead-word">用户评论</span>
				<NavLink to="/home"><i className="iconfont icon-viewgallery"></i></NavLink>
			</div>
			<div className="comment-main">
				<ul className="commentlist">
					{
						this.props.commentlist.comment?
						this.props.commentlist.comment.map(item=>
							<li key={item.id} className="comment-li">
								<div className="comment-custmor">{item.custmor}</div>
								<p className="comment-content">{item.content}</p>
								<p className="comment-date">{item.date}</p>
							</li>
						)
						:null
					}
				</ul>
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
			commentlist:state.comment
		}
	},
	{
		getcomment:(commentid)=>{
			console.log(commentid)
			return axios.get('/api/comment',{
				params:{
					id:commentid                                           
				}				
			}).then(res=>{
				console.log(res.data[0])
				return {
					type:"commentlist",
					payload:res.data[0]
				}
			})

		}
	}

	)(Comment);




/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */



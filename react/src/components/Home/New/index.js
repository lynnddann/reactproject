import React from "react";
import "./index.scss";
import {connect} from "react-redux";
import qs from 'qs';
 class New extends React.Component{
	constructor(){
		super();
		this.state={
			datalist:null
		}
	}
	changePage(e){
       var page = e.currentTarget.getAttribute('data-page');
       const paramspage=parseInt(page)
       this.props.getHot(paramspage)
    }

	componentDidMount() {
		this.props.getHot()
	}

	render(){
		var page = 1;
        var outputPage = [];
        var pages = Math.ceil(this.props.datalist.total/ 2 );
        console.log(pages)
        for(let i =1;i<pages+1;i++){
            outputPage.push(
                <li key={i}>
                    <a href="javascript:void(0)" data-page={i} onClick={ (e)=> this.changePage(e) }>{i}</a>
                </li>
            )
        }
		return <div id="new">			
			<div className="hotlist">
				<ul>
					{
						this.props.datalist.list?
						this.props.datalist.list.map(item=>
							<li key={item._id} onClick={this.handleclick.bind(this,item._id)}>
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
						:null
					}
				</ul>	
			</div>
			<nav aria-label="...">
                    <ul className="pagination">
                        {outputPage}
                    </ul>
            </nav>
			
			
		</div>
	}
	handleclick(id){
		this.props.history.push(`/detail/${id}`)
	}
}

export default connect(
	(state)=>{
		return {
			datalist:state.newlist
		}
	},
	{
		getHot:(paramspage)=>{
			return axios.get('/api/hotlist',{
				params:{
					limit:2,
					offset:2 * (paramspage - 1),
					typelist:"最新"
				}				
			}).then(res=>{
				console.log(res.data)
				return {
					type:"newlist",
					payload:res.data
				}
			})

		}
	}

	)(New);
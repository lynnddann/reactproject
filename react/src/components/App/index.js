import React from "react";
import "./index.scss";


class App extends React.Component{
	constructor(){
		super();
		this.state={
			
		}
	}

	render(){
		return <div>
			
			
			{
				this.props.children
			}
		</div>
	}
}

export default App;
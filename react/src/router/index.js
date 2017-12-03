import React from "react"
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import App from "../components/App";
import Home from "../components/Home";
import Hot from "../components/Home/Hot";
import New from "../components/Home/New";
import Detail from "../components/Detail";
import Catolog from "../components/Catolog";
import Goodsdetail from '../components/Detail/Goodsdetail'
import Comment from '../components/Detail/Comment'
import Me from "../components/Me";
import Cart from '../components/Cart';
import Search from '../components/Search';
import Register from '../components/Register';
import Catoinfo from '../components/Catoinfo'
import {Provider}  from "react-redux";
import store  from "../Redux/Store";

/*
	Vue:
	mode :history    /home 
	mode : hash      #/home

	React :

	BrowserRouter   /home
	HashRouter     #/home
 */

const router = (
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path="/home" render={()=>
						<Home>
							<Switch>
								<Route path="/home/hot" component={Hot}></Route>
								<Route path="/home/new" component={New}></Route>
								//<Redirect from="/home" to="/home/hot"/>
							</Switch>
						</Home>
					}/>
					<Route path="/detail/:id" component={Detail}/>
					<Route path="/goodsdetail/:id" component={Goodsdetail}/>
					<Route path="/comment/:id" component={Comment}/>
					<Route path="/catolog" component={Catolog}/>
					<Route path="/catoinfo/:cato" component={Catoinfo}/>
					<Route path="/me" component={Me}/>
					<Route path="/cart" component={Cart}/>
					<Route path="/search" component={Search}/>
					<Route path="/register" component={Register}/>
					<Redirect from="*" to="/home/hot"/>
				</Switch>
			</App>
		</Router>
	</Provider>
	)	


export default router;

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from './Component/Web/home';
//import   Reduxtest  from './Component/Web/Reduxtest';
import test from './Component/Web/test';
function App() {
  return (
		  <div className="Apps">
				<Router> 
				<div className="menu">
					<Route path="/" exact component={home} / >
					<Route path="/Home" exact component={home} / >
					<Route path="/Red" exact component={home} / >
					<Route path="/test" exact component={test} / >
					</div>
				</Router>
		</div>
  );
}

export default App;

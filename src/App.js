import React, { Component } from 'react';
import { Header, Main, Footer } from './components';

class App extends Component {
  render() {
  	return (
    	<div className="page">
    		<Header/>
				<Main/>
    		<Footer/>
    	</div>
    );
  }
}

export default App;

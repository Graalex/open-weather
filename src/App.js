import React, { Component } from 'react';
import { Header, WeatherList, Footer } from './components';

class App extends Component {
  render() {
    return (
    	<div className="page">
    		<Header />
    		<WeatherList />
    		<Footer />
    	</div>
    );
  }
}

export default App;

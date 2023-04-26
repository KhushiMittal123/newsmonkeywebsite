// import logo from './logo.svg'; 

//  import Navbar from './components/Navbar'; 

// import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'; 
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  
} from "react-router-dom";
export default class App extends Component { 
  // c='John' 
  state={
    progress:0
  }
setProgress=(progress)=>{
  this.setState({progress:progress})
}

  render() {
    return (
      <div> 
        <Router>
       <Navbar/>  
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pagesize={6} country='in' category='general'/>}>  </Route>
        <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={6} country='in' category='business'/>}>   </Route>
        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={6} country='in' category='health'/>}>   </Route>
        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={6} country='in' category='sports'/>}>   </Route>
        <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={6} country='in' category='science'/>}>   </Route>
        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="tecnology" pagesize={6} country='in' category='technology'/>}>   </Route>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={6} country='in' category='entertainment'/>}>   </Route>
       </Routes>
       </Router>
      </div>
    )
  }
}

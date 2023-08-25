import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import Footer from './components/Footer';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
     
        <Router>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<News country="us" key="general" cat="general"/>}></Route>
            <Route exact path="/business" element={<News country="us" key="business" cat="business"/>}></Route>
            <Route exact path="/entertainment" element={<News country="us" key="entertainment" cat="entertainment"/>}></Route>
            <Route exact path="/health" element={<News country="us" key="health" cat="health"/>}></Route>
            <Route exact path="/science" element={<News country="us" key="science" cat="science"/>}></Route>
            <Route exact path="/sports" element={<News country="us" key="sports" cat="sports"/>}></Route>
            <Route exact path="/technology" element={<News country="us" key="technology" cat="technology"/>}></Route>
          </Routes>
        <Footer/>
        </Router>
 
    )
  }
}

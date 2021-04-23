import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'

import Contact from './components/Contact/Contact'
import Index from './components/Index/Index'

 class App extends Component {
  render() {
    return (
     <div>
      
       <Router>
       <Navbar/>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
         
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
     
    </Router>
     </div>
      
        
    
    )
  }
}

export default App

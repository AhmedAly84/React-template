import React, { Component } from 'react'

import Work from '.././Work/Work'
import Home from '.././Home/Home'
import Portfolio from '.././Portfolio/Portfolio'
import Profile from '.././Profile/Profile'
import Footer from '.././Footer/Footer'
import SocialMedia from '.././SocialMedia/SocialMedia'
import About from '../About/About'


 class Index extends Component {
  render() {
    return (
      <div>
         
        
          <Home/>
          <Work/>
          <Portfolio/>
          <Profile/>
          <About/>
          <SocialMedia/>
          <Footer/>
      </div>
    )
  }
}

export default Index

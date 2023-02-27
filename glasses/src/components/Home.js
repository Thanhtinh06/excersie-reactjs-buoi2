import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import './home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Body />
      </div>
    )
  }
}

export default Home
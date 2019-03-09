import React, { Component } from 'react'

class Home extends Component {
  render() {

    const topStyle = {
      textDecoration: 'line-through',
      color: '#9B9B9B',
    }

   
   return(
      <div className="page-body">
        <div id="border-bottom" className="center1">
          <span style={topStyle}>Hi,</span>
          <span role="img" aria-labelledby="hey1">&nbsp; Welcome 👋🏽</span>
          {/* <hr className="divider"/> */}
        </div>

        <div id="border-bottom" className="center2">
          <p>I'm ANTHONY a SOFTWARE ENGINEER.</p> 
          {/* <hr className="divider"/> */}
        </div>
       
        <div id="border-bottom" className="center3">
          <p>who writes clean code to accelerate information discovery for users.</p>
          {/* <hr className="divider"/> */}
        </div>
        
      </div>
    )
  }
}

export default Home;
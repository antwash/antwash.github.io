import React, { Component } from 'react'

class Home extends Component {
  render() {

    const topStyle = {
      textDecoration: 'line-through',
      color: '#9B9B9B',
      fontSize: '35px',
      textAlign: 'center'
    }

    const midStyle = {
      color: '#white',
      fontSize: '35px',
      display: 'inline-block',
      fontFamily: 'Roboto',
      fontWeight: 100,
      textAlign: 'right'
    }

    const bottomStyle = {
      color: '#white',
      fontSize: '35px',
      display: 'inline-block',
      fontFamily: 'Roboto',
      fontWeight: 100
    }

    return(
      <div className="page-body">
        <div className="center">
          <span style={topStyle}>
            hi,
          </span>
          <span className="welcome-text">&nbsp; welcome 👋🏽</span>
        </div>

        <div className="center"><p style={midStyle}>i'm ANTHONY a SOFTWARE ENGINEER.</p></div>

        <div className="center">
          <p style={bottomStyle}>who writes clean code to accelerate information discovery for users.</p>
        </div>
      </div>
    )
  }
}

export default Home;
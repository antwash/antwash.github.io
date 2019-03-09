import React, { Component } from 'react'
import FooterItem from './FooterItem'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      findMe : [
  
        { 
          id:'1',
          title: 'Github',
          url: 'https://github.com/antwash',
          imagePath: '/icons/github.svg'
        },
        { 
          id:'2',
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/antdwash/',
          imagePath: '/icons/linkedin.svg'
        },
        { 
          id:'3',
          title: 'Twitter',
          url: 'https://twitter.com/antdwash',
          imagePath: '/icons/twitter.svg'
        },
        { 
          id:'4ß',
          title: 'Youtube',
          url: 'https://www.youtube.com/c/antdwash',
          imagePath: '/icons/youtube.svg'
        }
      ]
    }
  }

  render() {
    const contact_list = (this.state.findMe) ? this.state.findMe : [];
    const contactComponents = contact_list.map(contact => (<FooterItem key={contact.id} />))

    return (
      <div className="footer-row">
        { contactComponents }
      </div>
    )
  }
}

export default Footer;
import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import FooterItem from './FooterItem'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      findMe : [
        { title: 'Github',
          url: 'https://github.com/antwash',
          imagePath: '/icons/github.svg'
        },
        { title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/antdwash/',
          imagePath: '/icons/linkedin.svg'
        },
        { title: 'Twitter',
          url: 'https://twitter.com/antdwash',
          imagePath: '/icons/twitter.svg'
        },
        { title: 'Youtube',
          url: 'https://www.youtube.com/c/antdwash',
          imagePath: '/icons/youtube.svg'
        }
      ]
    }
  }

  render() {
    var findMe_items = []
    const contact_list = (this.state.findMe) ? this.state.findMe : [];

    for (var index = 0; index < contact_list.length; index++) {
      const contact_item = contact_list[index]
      findMe_items.push(<FooterItem key={index} item={contact_item} />)
    }

    return (
      <div>
        <Row className="footer-row">
          { findMe_items }
        </Row>
      </div>
    )
  }
}

export default Footer;
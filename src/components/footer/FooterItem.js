import React from 'react'

class FooterItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.item
    }
  }

  render() {
    const title = (this.props.item) ? this.props.item.title: '';
    const urlPath = (this.props.item) ? this.props.item.url: '';
    const imagePath = (this.props.item) ? this.props.item.imagePath: '';

    return (
        <div className="footer-item">
        <a href={urlPath}>
          <img 
            alt={title} 
            src={imagePath}
          />
        </a>
      </div>
    )
  }
}

export default FooterItem;

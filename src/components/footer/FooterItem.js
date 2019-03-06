import React from 'react'

class FooterItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item
    }
    this.visitURL = this.visitURL.bind(this);
  }

  visitURL() {
    const urlPath = (this.props.item) ? this.props.item.url : '';
    console.log("GO to URL PATH here", urlPath);
  }

  render() {
    const title = (this.props.item) ? this.props.item.title: '';
    const imagePath = (this.props.item) ? this.props.item.imagePath: '';

    console.log.bind(process.env)
    return (
        <div className="footer-item">
          <img 
            alt={title} 
            src={imagePath}  
            onClick={this.visitURL}
          />
      </div>
    )
  }
}

export default FooterItem;

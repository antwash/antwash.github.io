import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';

class NavigationBarItem extends Component {
  constructor(props){
    super(props)

    this.state = { 
      title: this.props.title,
      selected: this.props.selected,
    }
  }

  drawLine(item) {
    console.log("DRAW LINE: ", item)
    return (
      <div></div>
    )
  }

  render() {
    const title = this.state.title;
    const selected = this.state.selected;

    const style = {
      color: 'white',
      paddingRight: '30px'
    }

    return (
      <Nav.Link 
        style={style}
        href={title}
      >
        {title}
        {selected ? this.drawLine(title) : <div></div> }
      </Nav.Link>
    )
  }
}
export default NavigationBarItem;
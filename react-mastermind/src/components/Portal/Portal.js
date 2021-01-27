import {Component} from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById("portal")


class Portal extends Component {
  //create newElement
  newElement = document.createElement("div");

  //append this element ot the DOM when it mounts
  componentDidMount = () => {
    portalRoot.appendChild(this.newElement);
  }
  //remove the new Element on line 9, when it unmounds
  componentWillUnmount = () => {
    portalRoot.removeChild(this.newElement);
  }
  render() {
    //Now we are rendering this child in the portal
    const {childern} = this.props;
    return ReactDOM.createPortal(childern, this.newElement);

  }
}
export default Portal

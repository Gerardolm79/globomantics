import { Component } from "react";
import logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <header className="row">
        <div className="col-md-5">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
          <h1>{this.props.title}</h1>
          {this.props.subtitle}
        </div> 
      </header>
    );
  }
}

export default Header;
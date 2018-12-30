import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Header extends Component {
_handleClick = () => {
    const {
      history: { goBack }
    } = this.props;
    goBack();
  };

  render() {
    const { location: { pathname } } = this.props;
    const isPost = pathname.indexOf("/posts/") !== -1;

    return (
        <div>
            { isPost 
                ? <button onClick={this._handleClick}>SIMON</button> 
                : <div><h1> Header </h1></div> 
            }
        </div>
    )
  }
}

export default withRouter(Header);

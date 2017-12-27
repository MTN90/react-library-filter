import React from 'react';
import {Icon} from '../Icon/Icon.component';
import './scss/header.component.css';

//-------------------------------------------------------------
// Class for the header
//-------------------------------------------------------------

export class Header extends React.Component {

  render(){
    return(
      <header>
        <Icon fa={this.props.icon} />
        <a href="index.html">
          <h1>{this.props.title}</h1>
        </a>
      </header>
    );
  }
}

import React from 'react';
import './scss/icon.component.css';

//-------------------------------------------------------------
// Class for creating font-awesome icons
//-------------------------------------------------------------

export class Icon extends React.Component {
  render(){
    return(
      <i
        className={"fa " + this.props.fa}>
      </i>
    );
  }
}

import React from 'react';
import Highlighter from 'react-highlight-words';
import {Icon} from '../Icon/Icon.component';
import './scss/search-bar-list.component.css';


//-------------------------------------------------------------
// Class for every item in the list
//-------------------------------------------------------------

class SearchItem extends React.Component {

  constructor(props){
    super(props);
    // Ensure handleClick this selector works
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    // If its not the "nothing found message" alert the clicked library name
    if(this.props.item !== 0){
      alert("You selected: " + this.props.name);
    }
  }

  render(){
    return(
      <li id={this.props.id} onClick={this.handleClick} item={this.props.item}>
        <a>
          <Icon fa={this.props.icon}/>
          <Highlighter
            highlightClassName='highlight'
            searchWords={[this.props.query]}
            textToHighlight={this.props.name} />
        </a>
      </li>
    );
  }
}

//-------------------------------------------------------------
// Class for constructing the list
//-------------------------------------------------------------

export class SearchBarList extends React.Component {

  render(){
    // Save lib array from props in constant
    const libs = this.props.libs;
    // If libs array is empty return "no results found" to user
    if(libs.length === 0){
      return (
          <ul>
            <SearchItem
              item={0}
              key={0}
              query={this.props.query}
              name={"Sorry, but '"+this.props.query+"' library doesn't exist"}
              icon={'fa-frown-o'}
              id={'noResult'}
            />
          </ul>
      );
    }
    // If any results found, map and return all matches to user
    else {
    // Map results - using index for keys
      const libs = this.props.libs.map((lib, index) => {
          return (
            <SearchItem
              item={index + 1}
              key={index + 1}
              query={this.props.query}
              name={lib.name}
              icon={'fa-university'}
            />
          );
      });
        return <ul>{libs}</ul>;
    }
  }
}

import React from 'react';
import Libraries from '../../libs/libraries';
import {SearchBarList} from '../SearchBarList/SearchBarList.component';
import {Icon} from '../Icon/Icon.component';
import './scss/search-bar.component.css';

//-------------------------------------------------------------
// Class for the filter search bar
//-------------------------------------------------------------

export class SearchBar extends React.Component {

  constructor(props){
    super(props);
    // Set state object
    this.state = {
      libs: [],
      query: ""
    }
    // Ensure handleChange this selector works
    this.handleChange = this.handleChange.bind(this);
  }

  // Event listener (triggers on change in input)
  handleChange(event){
    // Force mount function on state change in a setState callback function
    this.setState({query: event.target.value}, () => {
      this.componentWillMount()
    })
  }

  // Component mount function
  componentWillMount() {
    // Fetch data from online API (uncomment to use)
    //this.remoteLibraryAPI();

    // Fetch data from local file src/libs/libraries.js (uncomment to use)
    this.localLibraryFile();
    console.log(" > This can be changed in the componentWillMount() function");
  }

  remoteLibraryAPI(){
    console.log("fetching data from online API . . .");
    // Save this obj in me
    const me = this;
    // Fetch from library API - query
    fetch('http://localhost:5000/libraries/'+this.state.query)
      // Parse as json
      .then(res => res.json())
      .then(function(response){
        // Update response in libs state
        me.setState({ libs : response })
      });
  }

  localLibraryFile() {
    console.log("fetching data from local file . . .");
    // Search query toLowerCase for correct comparison
    const query = this.state.query.toLowerCase();
    // Library variable (containing libraries from libraries.js)
    const libs = Libraries.libraries
    // Filter data according to search query
    .filter(lib => lib.name.toLowerCase().indexOf(query) >= 0);
    // Update filter in libs state
    this.setState({ libs : libs });
  }

  render(){
    return(
      <section>
        <div>
          <Icon fa={'fa-filter'}/>
          <input
            type="text"
            placeholder="Filter . . ."
            onChange={this.handleChange}
            value={this.state.query}
          />
        </div>
        <SearchBarList query={this.state.query} libs={this.state.libs}/>
      </section>
    );
  }
}

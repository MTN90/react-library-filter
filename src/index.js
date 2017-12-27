import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './components/Header/Header.component';
import {SearchBar} from './components/SearchBar/SearchBar.component';

import './scss/index.css';

//-------------------------------------------------------------
// Insert Header
//-------------------------------------------------------------

ReactDOM.render(
  <Header title="My ReactJS Library Filter" icon="fa-book"/>,
  document.getElementById('header')
);

//-------------------------------------------------------------
// Insert Search/Filter field and results
//-------------------------------------------------------------

ReactDOM.render(
  <SearchBar />,
  document.getElementById('search')
);

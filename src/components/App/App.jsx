import React, { Component } from 'react';
import List from './../List/List';
import './App.css';
import logo from './logo.svg'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: ''
    }
  }

  filterChange = (event) => {
    this.setState({ filterValue: event.target.value})
  }
  addList = () => {
    this.props.allActions.addList();
  }

  render() {
    // console.log('App', this.props)
    let data = this.props.data;
    let listRows = [];
    let filter = this.state.filterValue
    
    for (let list in data) {
      listRows.push(
        <List 
          data={data[list]} 
          key={list} 
          listId={list} 
          allActions={this.props.allActions}
          filter={filter}
        />)
    }

    return (
      <div className="app">
        <div className="header">
          <button className='add-list-btn' onClick={this.addList} title='Add new list'></button>
          <img 
            src={logo} 
            className="header__logo" 
            alt="logo"
          />
          <h2 className='header__title'>
            Google Keep copy on React-Redux
          </h2>
          <div className='header__search'>
            <input
              className='search__input'
              type="text"
              onChange={this.filterChange}
              value={this.state.filterValue}
              title='Search'
            />
            <div className="search__icon"></div>
          </div>

        </div>
        <div className="container">
          {listRows}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import "./ItemNew.css";

class ItemNew extends Component {
  constructor(props) {
		super(props);
    this.state = {
      contentValue: ''
    };
	} 

  changeNewItem = e => {
    e.preventDefault();
    this.setState({ contentValue: e.target.value})
  };

  addNote = () => {
    let listId = this.props.listId;
    let value = this.state.contentValue;

    this.props.allActions.addNote(listId, value)
    this.setState({ contentValue: '' })
  };

  keydown = e => {
    // console.log(e.keyCode)
    // e.preventDefault();
    if ((e.keyCode === 13)||(e.keyCode === 9)) {
      e.preventDefault();
      this.addNote();
    }
  }

  render() {
    // console.log('I am render in itemNew lisId: ', this.props.listId)
    return(
      <li className='itemNew' id='itemNew'>
        <button 
          className='itemNew__add'
          onClick={this.addNote} 
        >
        </button>
        <input
          type="text"
          className='itemNew__content'
          value={this.state.contentValue}
          onChange={this.changeNewItem.bind(this)}
          onKeyDown={this.keydown}
        />
      </li>
    )
  }
}

export default ItemNew
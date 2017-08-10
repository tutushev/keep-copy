import React, { Component } from 'react';
import './ColorPanel.css';

class ColorPanel extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <div className='list__footer'>
        <button className='btn btn-1'>C1</button>
        <button className='btn btn-2'>C2</button>
        <button className='btn btn-2'>D</button>

        <div className='colorPanel'>
          <button className='colorPanel__btn'></button>
          <button className='colorPanel__btn'></button>
          <button className='colorPanel__btn'></button>
          <button className='colorPanel__btn'></button>
          <button className='colorPanel__btn'></button>
          <button className='colorPanel__btn'></button>
          <button className='colorPanel__btn'></button>
          <button className='colorPanel__btn'></button>
        </div>
      </div>
    )
  }
}

export default ColorPanel;
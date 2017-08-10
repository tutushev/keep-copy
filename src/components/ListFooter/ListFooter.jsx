import React, { Component } from 'react';
// import ColorPanel from '../ColorPanel/ColorPanel.jsx'
import './ListFooter.css';

class ListFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "colorPanelVisible": false
    }
  }

  deleteList = () => {
    let listId = this.props.listId;
    this.props.allActions.deleteList(listId)
  }

  changeVizible = () => {
    let now = !this.state.colorPanelVisible;
    this.setState({ colorPanelVisible: now })
  }

  changeColor1 = () => { this.setState({ colorPanelVisible: false }); this.props.allActions.changeColorList(this.props.listId, '#ffffff') }
  changeColor2 = () => { this.setState({ colorPanelVisible: false }); this.props.allActions.changeColorList(this.props.listId, '#FFD180') }
  changeColor3 = () => { this.setState({ colorPanelVisible: false }); this.props.allActions.changeColorList(this.props.listId, '#FF8A80') }
  changeColor4 = () => { this.setState({ colorPanelVisible: false }); this.props.allActions.changeColorList(this.props.listId, '#CFD8DC') }
  changeColor5 = () => { this.setState({ colorPanelVisible: false }); this.props.allActions.changeColorList(this.props.listId, '#FFFF8D') }
  changeColor6 = () => { this.setState({ colorPanelVisible: false }); this.props.allActions.changeColorList(this.props.listId, '#80D8FF') }
  changeColor7 = () => { this.setState({ colorPanelVisible: false }); this.props.allActions.changeColorList(this.props.listId, '#A7FFEB') }
  changeColor8 = () => { this.setState({ colorPanelVisible: false }); this.props.allActions.changeColorList(this.props.listId, '#CCFF90') }

  render() {
    
    // console.log(this.state.colorPanelVisible)
    let ColorPanelClass = 'color-panel hidden'
    if (this.state.colorPanelVisible) {
      ColorPanelClass = 'color-panel visible'
    }
    return (
      <div className='list__footer'>
        <div className={ColorPanelClass}>
          <button className='color-panel__btn btn-1' onClick={this.changeColor1}></button>
          <button className='color-panel__btn btn-2' onClick={this.changeColor2}></button>
          <button className='color-panel__btn btn-3' onClick={this.changeColor3}></button>
          <button className='color-panel__btn btn-4' onClick={this.changeColor4}></button>
          <button className='color-panel__btn btn-5' onClick={this.changeColor5}></button>
          <button className='color-panel__btn btn-6' onClick={this.changeColor6}></button>
          <button className='color-panel__btn btn-7' onClick={this.changeColor7}></button>
          <button className='color-panel__btn btn-8' onClick={this.changeColor8}></button>
        </div>
        <button 
          className='btn btn-color'
          title='Custom background'
          onClick={this.changeVizible}
          ></button>
        <button 
          className='btn btn-delete'
          title='Delete list'
          onClick={this.deleteList}
        ></button>
      </div>
    )
  }
}

export default ListFooter;
import React, { Component } from 'react';
import "./Item.css";

class Item extends Component {
	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
		this.toggleAreItDid = this.toggleAreItDid.bind(this);
		this.hoverOn = this.hoverOn.bind(this);
		this.hoverOff = this.hoverOff.bind(this);

		this.state =  {
			hover: false
		}
	}

	toggleAreItDid() {
		let listId = this.props.listId;
		let itemId = this.props.itemId;
		this.props.allActions.toggleAreItDid(listId, itemId)
	}

	deleteItem() {
		let listId = this.props.listId;
		let itemId = this.props.itemId;
		this.props.allActions.deleteNote(listId, itemId)
	}

	itemChange(e) {
		e.preventDefault();
		let listId = this.props.listId;
		let itemId = this.props.itemId;
		let value = e.target.value;
		this.props.allActions.itemChange(listId, itemId, value);
	}

	hoverOn = () => {
		this.setState({ hover: true});
	}

	hoverOff() {
		this.setState({ hover: false });
	}

	keydown = e => {
		// console.log(e.keyCode)
		// e.preventDefault();
		if (e.keyCode === 13) {
			e.preventDefault();
		}
	}

	render() {
		// console.log('Item', this.props)
		let itemCheckClass = 'item__check';
		let itemContentClass = 'item__content';
		let cntLength = Math.ceil((this.props.item.content.length)/33);

		if (this.props.item.areItDid) {
			itemCheckClass = 'item__check check';
			itemContentClass = 'item__content check';
		}

		let itemDeleteClass = 'item__delete'
		if (this.state.hover) {
			itemDeleteClass = 'item__delete visible'
		}

		let itemContentHeight = +(cntLength*24) + 'px';
		
		// <input 
		// 	className={itemContentClass}
		// 	type="text"
		// 	value={this.props.item.content}
		// 	onChange={this.itemChange.bind(this)}
		// 	style={{ color: this.props.textColor }}
		// />
		return (
			<li 
				className='item'
				id={'item-' + this.props.itemId}
				onMouseEnter={this.hoverOn.bind(this)} 
				onMouseLeave={this.hoverOff.bind(this)}
			>
				<div className={itemCheckClass} onClick={this.toggleAreItDid}></div>
				<textarea
					className={itemContentClass}
					onChange={this.itemChange.bind(this)}
					style={{ color: this.props.textColor, height: itemContentHeight}}
					value={this.props.item.content}
					onKeyDown={this.keydown}
				></textarea>
				<button className={itemDeleteClass} onClick={this.deleteItem}></button>
			</li>
		)
	}
}

export default Item;
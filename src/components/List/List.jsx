import React, { Component } from 'react';
import Item from '../Item/Item.jsx'
import ListFooter from '../ListFooter/ListFooter.jsx'
import ItemNew from '../ItemNew/ItemNew.jsx'
import "./List.css";

class List extends Component {

	// constructor(props) {
	// 	super(props);
	// 	// this.clickTest = this.clickTest()
	// 	// this.getAllActions = this.getAllActions.bind(this);
	// }



	clickTest() {
		this.props.allActions.actionTest();
	}

	forNewNoteChange(e) {
		this.props.allActions.addNote(e)
	}

	listTitleChange(e) {
		let listId = this.props.listId;
		let value = e.target.value;
		this.props.allActions.listTitleChange(listId, value);
	}

	render() {
		// console.log('List', this.props)

		let rows = [];
		let data = this.props.data;
		let bgColor = this.props.data.settings.listBgc;
		let textColor = this.props.data.settings.textColor;
		let itemCount = 0;
		var filter = new RegExp(this.props.filter, 'gi');

		for(var element in data) {
			if (element !== 'settings') {
				if (filter.test(data[element].content)) {
					itemCount++;
					rows.push(<Item 
						item = {data[element]} 
						key = {element} 
						itemId = {element} 
						listId = {this.props.listId}
						allActions = {this.props.allActions}
						textColor = {textColor}
					/>)
				}
			}
		}
		

		return (
			<div className="list" style={{ background: bgColor, color: textColor}} >
				<input
					className='list__title'
					type="text"
					value={this.props.data.settings.listTitle}
					onChange={this.listTitleChange.bind(this)}
					style={{ color: textColor }}
				/>
				<ul className='list__items'>
					{rows}
					<ItemNew allActions={this.props.allActions} itemCount={itemCount} listId={this.props.listId}/>
				</ul>
				<ListFooter allActions={this.props.allActions} listId={this.props.listId} />
			</div>
		)
	}
}

export default List;
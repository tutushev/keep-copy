


export function actionTest() {
	// console.log('I am actionTest in mainAppActions.jsx')
	return {
		type: 'TEST'
	}
}

export function toggleColor() {
	// console.log('i am toggleColor')
	return {
		type: 'TOGGLE_COLOR'
	}
}

export function deleteNote(listId, itemId) {
	// console.log('i am addNote, payload = ', ve )
	return {
		type: 'DELETE_NOTE',
		payload: {
			'listId': listId,
			'itemId': itemId
		}
	}
}

export function toggleAreItDid(listId, itemId) {

	return {
		type: 'TOGGLE_DID',
		payload: {
			'listId': listId,
			'itemId': itemId
		}
	}
}

export function itemChange(listId, itemId, value) {

	return {
		type: 'ITEM_CHANGE',
		payload: {
			'listId': listId,
			'itemId': itemId,
			'value': value
		}
	}
}

export function listTitleChange(listId, value) {

	return {
		type: 'LIST_TITLE_CHANGE',
		payload: {
			'listId': listId,
			'value': value
		}
	}
}


export function addNote(listId, value) {

	return {
		type: 'ADD_NOTE',
		payload: {
			'listId': listId,
			'value': value
		}
	}
}

export function deleteList(listId) {

	return {
		type: 'DELETE_LIST',
		payload: {
			'listId': listId
		}
	}
}

export function addList() {

	return {
		type: 'ADD_LIST'
	}
}

export function changeColorList(listId, color) {

	return {
		type: 'CHANGE_COLOR_LIST',
		payload: {
			'listId': listId,
			'value': color
		}
	}
}


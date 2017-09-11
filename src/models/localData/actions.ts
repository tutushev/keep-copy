import {
  AddItemAction, AddListAction, ChangeColorListAction, ChangeItemAction, ChangeListTitleAction,
  DeleteItemAction, DeleteListAction, ItemToggleAction, LOCAL_DATA_ACTIONS, ReorderItemsAction
} from './types'

export function deleteItem(listId: string, itemId: string): DeleteItemAction {
  return {
    type: LOCAL_DATA_ACTIONS.DELETE_ITEM,
    payload: {
      listId: listId,
      itemId: itemId
    }
  }
}

export function itemToggle(listId: string, itemId: string): ItemToggleAction {
  return {
    type: LOCAL_DATA_ACTIONS.ITEM_TOGGLE,
    payload: {
      listId: listId,
      itemId: itemId
    }
  }
}

export function changeItem(listId: string, itemId: string, value: string): ChangeItemAction {
  return {
    type: LOCAL_DATA_ACTIONS.CHANGE_ITEM,
    payload: {
      listId: listId,
      itemId: itemId,
      value: value,
    }
  }
}

export function changeListTitle(listId: string, value: string): ChangeListTitleAction {
  return {
    type: LOCAL_DATA_ACTIONS.CHANGE_LIST_TITLE,
    payload: {
      listId: listId,
      value: value
    }
  }
}

export function addItem(listId: string, value: string): AddItemAction {
  return {
    type: LOCAL_DATA_ACTIONS.ADD_ITEM,
    payload: {
      listId: listId,
      value: value
    }
  }
}

export function deleteList(listId: string): DeleteListAction {
  return {
    type: LOCAL_DATA_ACTIONS.DELETE_LIST,
    payload: {
      listId: listId
    }
  }
}

export function addList(): AddListAction {
  return {
    type: LOCAL_DATA_ACTIONS.ADD_LIST,
    payload: {}
  }
}

export function changeColorList(listId: string, color: string): ChangeColorListAction {
  return {
    type: LOCAL_DATA_ACTIONS.CHANGE_COLOR_LIST,
    payload: {
      listId: listId,
      value: color
    }
  }
}

export function reorderItems(v: {
  fromListId: string, toListId: string, toIndex: number, itemId: string
}): ReorderItemsAction {
  return {
    type: LOCAL_DATA_ACTIONS.REORDER_ITEMS,
    payload: v
  }
}
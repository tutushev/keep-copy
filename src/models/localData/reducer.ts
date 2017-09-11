import {
  LOCAL_DATA_ACTIONS, LocalDataState, LocalDataAction, AddItemAction, DeleteItemAction, ChangeItemAction,
  ItemToggleAction, ChangeListTitleAction, ChangeColorListAction, DeleteListAction, ReorderItemsAction
} from './types'
import { localDataInitialState } from './_initialState'

export function localDataReducer(state: LocalDataState = localDataInitialState, action: LocalDataAction): LocalDataState {
  switch (action.type) {
    case LOCAL_DATA_ACTIONS.REORDER_ITEMS: {
      const { payload: { fromListId, toListId, toIndex, itemId } } = action as ReorderItemsAction;

      const fromList = state.find((v) => v.listId === fromListId)
      if (!fromList) return state

      const draggableItem = fromList.listItems.find((v) => v.itemId === itemId)
      if (!draggableItem) return state

      return state.map((v) => {
        if (!(v.listId === fromListId || v.listId === toListId)) return v
        let newList = { ...v }

        if (v.listId === fromListId) {
          newList = { ...newList, listItems: newList.listItems.filter((vv) => vv.itemId !== itemId)}
        }

        if (v.listId === toListId) {
          const newListItems = [ ...newList.listItems ]
          newListItems.splice(toIndex, 0, draggableItem)
          newList = {
            ...newList,
            listItems: newListItems
          }
        }

        return newList
      })
    }

    case LOCAL_DATA_ACTIONS.DELETE_LIST: {
      const { payload: { listId } } = action as DeleteListAction;
      return state.filter((v) => v.listId !== listId)
    }

    case LOCAL_DATA_ACTIONS.ADD_LIST: {
      const newList = {
        listId: String(Date.now()),
        backgroundColor: '#FFFFFF',
        textColor: 'black',
        title: 'New list',
        listItems: []
      }

      return [ newList, ...state ]
    }

    case LOCAL_DATA_ACTIONS.CHANGE_COLOR_LIST: {
      const { payload: { listId, value } } = action as ChangeColorListAction;
      return state.map((v) => {
        return v.listId === listId
          ? { ...v, backgroundColor: value }
          : v
      })
    }

    case LOCAL_DATA_ACTIONS.CHANGE_LIST_TITLE: {
      const { payload: { listId, value } } = action as ChangeListTitleAction;
      return state.map((v) => {
        return v.listId === listId
          ? { ...v, title: value }
          : v
      })
    }

    case LOCAL_DATA_ACTIONS.ITEM_TOGGLE: {
      const { payload: { listId, itemId } } = action as ItemToggleAction;
      return state.map((v) => {
        return v.listId === listId
          ? { ...v, listItems: v.listItems.map((vv) => {
              return vv.itemId === itemId ? { ...vv, isFinished: !vv.isFinished } : vv
            })}
          : v
      })
    }

    case LOCAL_DATA_ACTIONS.DELETE_ITEM: {
      const { payload: { listId, itemId} } = action as DeleteItemAction;
      return state.map((v) => {
        return v.listId === listId
          ? { ...v, listItems: v.listItems.filter((vv) => vv.itemId !== itemId) }
          : v
      })
    }

    case LOCAL_DATA_ACTIONS.CHANGE_ITEM: {
      const { payload: { listId, itemId, value } } = action as ChangeItemAction;
      return state.map((v) => {
        return v.listId === listId
          ? { ...v, listItems: v.listItems.map((vv) => {
              return vv.itemId === itemId ? { ...vv, content: value, } : vv
            })}
          : v
      })
    }

    case LOCAL_DATA_ACTIONS.ADD_ITEM: {
      const { payload } = action as AddItemAction;
      return state.map((v) => {
        if (v.listId !== payload.listId) return v

        const listItems = [
          ...v.listItems,
          {
            itemId: String(Date.now()),
            content: payload.value,
            isFinished: false,
          }
        ]
        return { ...v, listItems }
      })
    }

    default: {
      return state
    }

  }
}
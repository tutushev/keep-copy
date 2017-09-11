import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { RootState } from '../../reducers'
import {
  addItem,
  changeColorList,
  changeItem,
  changeListTitle, deleteItem, deleteList,
  itemToggle, reorderItems,
} from '../../models/localData/actions'
import { Function1 } from '../../utils'
import { KeepSpaceComponent } from './KeepSpace'
import { LocalDataState } from '../../models/localData/types'
import { TodoItemHandlers } from './components/Item'
import { TodoListHandlers } from './components/List'

type StateProps = {
  localData: LocalDataState
  filter: string
}

type DispatchProps = TodoItemHandlers & TodoListHandlers & {
  reorderItems: Function1<{ fromListId: string, toListId: string, toIndex: number, itemId: string }, void>
}

export type KeepSpaceComponentProps = StateProps & DispatchProps

const mapStateToProps = (state: RootState): StateProps => ({
  localData: state.localData,
  filter: state.settings.filter,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  changeColorList: (v: string, vv: string) => {
    dispatch(changeColorList(v, vv));
  },
  itemToggle: (v: string, vv: string) => {
    dispatch(itemToggle(v, vv));
  },
  changeItem: (v: string, vv: string, vvv: string) => {
    dispatch(changeItem(v, vv, vvv));
  },
  changeListTitle: (v: string, vv: string) => {
    dispatch(changeListTitle(v, vv));
  },
  addItem: (v: string, vv: string) => {
    dispatch(addItem(v, vv));
  },
  deleteItem: (v: string, vv: string) => {
    dispatch(deleteItem(v, vv));
  },
  deleteList: (v: string) => {
    dispatch(deleteList(v));
  },
  reorderItems: (v: { fromListId: string, toListId: string, toIndex: number, itemId: string }) => {
    dispatch(reorderItems(v));
  },
});

export const KeepSpace = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeepSpaceComponent)
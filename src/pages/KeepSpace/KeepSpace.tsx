import React, { PureComponent } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { CSSTransition, TransitionGroup, } from 'react-transition-group'

import { List, TodoListHandlers } from './components/List'
import './KeepSpace.css'
import { KeepSpaceComponentProps } from './index'
import { TodoItemHandlers } from './components/Item'

export class KeepSpaceComponent extends PureComponent<KeepSpaceComponentProps> {
  readonly _todoItemHandlers: TodoItemHandlers
  readonly _todoListHandlers: TodoListHandlers

  constructor(props: KeepSpaceComponentProps) {
    super(props);
    this._todoItemHandlers = {
      deleteItem: props.deleteItem,
      itemToggle: props.itemToggle,
      changeItem: props.changeItem,
    }
    this._todoListHandlers = {
      changeListTitle: props.changeListTitle,
      addItem: props.addItem,
      deleteList: props.deleteList,
      changeColorList: props.changeColorList,
    }
  }

  private readonly _onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId} = result;
    if (!destination) return
    this.props.reorderItems({
      itemId: draggableId,
      fromListId: source.droppableId,
      toListId: destination.droppableId,
      toIndex: destination.index,
    })
  }

  render() {
    return (
      <div className='container'>
        <DragDropContext onDragEnd={this._onDragEnd}>
          <TransitionGroup>
            {this.props.localData.map((list) => (
              <CSSTransition
                key={list.listId}
                classNames='list-transition'
                timeout={{ enter: 200, exit: 200 }}
              >
                <List
                  key={list.listId}
                  listData={list}
                  filter={this.props.filter}
                  todoItemHandlers={this._todoItemHandlers}
                  todoListHandlers={this._todoListHandlers}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </DragDropContext>
      </div>
    );
  }
}
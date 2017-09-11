import React, { ChangeEvent, FunctionComponent } from 'react'
import { CSSTransition,TransitionGroup, } from 'react-transition-group'
import { Droppable } from 'react-beautiful-dnd'

import { Item, TodoItemHandlers } from '../Item'
import { ListFooter } from '../ListFooter'
import { ItemNew } from '../ItemNew'
import './List.css'
import { Function1, Function2 } from '../../../../utils'
import { TodoList } from '../../../../models/localData/types'

export type TodoListHandlers = {
  changeListTitle: Function2<string, string, void>
  addItem: Function2<string, string, void>
  deleteList: Function1<string, void>
  changeColorList: Function2<string, string, void>
}

type ListProps = {
  listData: TodoList
  filter: string

  todoItemHandlers: TodoItemHandlers
  todoListHandlers: TodoListHandlers
}

export const List: FunctionComponent<ListProps> = (props) => {
  const {
    listData: { backgroundColor, textColor, title, listId, listItems },
    filter, todoListHandlers, todoItemHandlers
  } = props

  const changeListTitle = (e: ChangeEvent<HTMLInputElement>) => {
    todoListHandlers.changeListTitle(listId, e.target.value)
  }

  return (
    <div className='list' style={{ background: backgroundColor, color: textColor }}>
      <input
        className='list__title'
        type='text'
        value={title}
        onChange={changeListTitle}
        style={{ color: textColor }}
      />

      <Droppable droppableId={listId} type='ITEM'>
        {(provided) => (
          <ul
            className='list__items'
            ref={provided.innerRef}
          >
            <TransitionGroup>
              {listItems.map((item, i) => (
                <CSSTransition
                  key={item.itemId}
                  classNames='item-transition'
                  timeout={ { enter: 200, exit: 200 } }
                >
                  <Item
                    {...item}
                    key={item.itemId}
                    listId={listId}
                    textColor={textColor}
                    index={i}
                    filter={filter}
                    handlers={todoItemHandlers}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <ItemNew
        listId={listId}
        addItem={todoListHandlers.addItem}
      />
      <ListFooter
        listId={listId}
        deleteList={todoListHandlers.deleteList}
        changeColorList={todoListHandlers.changeColorList}
      />
    </div>
  )
}
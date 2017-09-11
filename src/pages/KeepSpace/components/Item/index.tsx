import React, { ChangeEvent, KeyboardEvent, FunctionComponent } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import classNames from 'classnames'
import { Function2, Function3 } from '../../../../utils'

import './Item.css'

export type TodoItemHandlers = {
  deleteItem: Function2<string, string, void>
  itemToggle: Function2<string, string, void>
  changeItem: Function3<string, string, string, void>
}

type TodoItemProps = {
  index: number
  itemId: string
  content: string
  isFinished: boolean
  listId: string
  filter: string
  textColor: string
  handlers: TodoItemHandlers
}

export const Item: FunctionComponent<TodoItemProps> = (props) => {
  const { itemId, isFinished, content, textColor, index, listId, handlers, filter } = props

  const changeItem = (e: ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault()
    handlers.changeItem(listId, itemId, e.target.value)
	}

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 || e.keyCode === 9) {
			e.preventDefault()
		}
	}

  const cntLength = Math.ceil(( +content.length )/33)
  const itemContentHeight = +(cntLength*24) + 'px'

  if (!content.toLowerCase().includes(filter.toLowerCase())) {
    return null
  }

	return (
    <Draggable draggableId={itemId} index={index}>
      {(provided) => (
        <div>
          <div
            className='item'
            style={provided.draggableProps.style}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
              className='item__dnd'
              {...provided.dragHandleProps}
            >
            </div>
            <div
              className={classNames('item__check', {
                'check': isFinished
              })}
              onClick={() => handlers.itemToggle(listId, itemId)}
            />
            <textarea
              className={classNames([
                'item__content', { 'check': isFinished }
              ])}
              onChange={changeItem}
              style={{ color: textColor, height: itemContentHeight}}
              value={content}
              onKeyDown={onKeyDown}
            />
            <button className='item__delete' onClick={() => handlers.deleteItem(listId, itemId)}/>
          </div>
        </div>
      )}
    </Draggable>
  )
}
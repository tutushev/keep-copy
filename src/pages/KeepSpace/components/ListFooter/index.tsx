import React, { FunctionComponent, MouseEvent, useState } from 'react';

import { Function1, Function2 } from '../../../../utils'
import { ColorPopover, ConfirmDialog } from './_components'
import './ListFooter.css';

type ListFooterProps = {
  listId: string
  deleteList: Function1<string, void>
  changeColorList: Function2<string, string, void>
}

export const ListFooter: FunctionComponent<ListFooterProps> = (props) => {
  const [ colorPanelAnchor, setColorPanelAnchor] = useState<HTMLButtonElement | null>(null);
  const [ showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const changeVisible = (e: MouseEvent<HTMLButtonElement>): void => {
    setColorPanelAnchor(e.currentTarget)
  }

  const onSetColor = (color: string | null) => {
    setColorPanelAnchor(null)
    color && props.changeColorList(props.listId, color)
  }

  const colorPanelVisible = Boolean(colorPanelAnchor);

  return (
    <>
      <div className='list__footer'>
        <button
          className='btn btn-color'
          title='Custom background'
          onClick={changeVisible}
        />
        <button
          className='btn btn-delete'
          title='Delete list'
          onClick={() => setShowDeleteDialog(true)}
        />
      </div>
      <ColorPopover
        colorPanelVisible={colorPanelVisible}
        colorPanelAnchor={colorPanelAnchor}
        onSetColor={onSetColor}
      />
      <ConfirmDialog
        open={showDeleteDialog}
        onConfirm={() => props.deleteList(props.listId)}
        onCancel={() => setShowDeleteDialog(false)}
      />
    </>
  )
}
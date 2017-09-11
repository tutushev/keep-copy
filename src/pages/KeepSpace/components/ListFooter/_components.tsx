import { Function0, Function1 } from '../../../../utils'
import React, { FunctionComponent } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, Popover } from '@material-ui/core'

type ConfirmDialogProps = {
  open: boolean
  onConfirm: Function0<void>
  onCancel: Function0<void>
}

export const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = (props) => (
  <Dialog
    maxWidth="xs"
    aria-labelledby="confirmation-dialog-title"
    open={props.open}
    disableBackdropClick={false}
    onClose={props.onCancel}
    onEscapeKeyDown={props.onCancel}
  >
    <DialogTitle id="confirmation-dialog-title">A you really want to delete List?</DialogTitle>
    <DialogActions>
      <Button autoFocus onClick={props.onCancel} color="primary">
        Cancel
      </Button>
      <Button onClick={props.onConfirm} color="primary">
        Ok
      </Button>
    </DialogActions>
  </Dialog>
)

type ColorPopoverProps = {
  colorPanelVisible: boolean
  colorPanelAnchor: null | Element
  onSetColor: Function1<string | null, void>
}

const colors = [
  '#ffffff',
  '#FFD180',
  '#FF8A80',
  '#CFD8DC',
  '#FFFF8D',
  '#80D8FF',
  '#A7FFEB',
  '#CCFF90',
]

export const ColorPopover: FunctionComponent<ColorPopoverProps> = (props) => (
  <Popover
    open={props.colorPanelVisible}
    anchorEl={props.colorPanelAnchor}
    anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
    transformOrigin={{ horizontal: 'center', vertical: 'center' }}
    disableBackdropClick={false}
    onClose={() => props.onSetColor(null)}
    onEscapeKeyDown={() => props.onSetColor(null)}
  >
    <div className='color-panel'>
      {colors.map((color) => (
        <button
          className='color-panel__btn'
          style={{ backgroundColor: color }}
          key={color}
          onClick={() => props.onSetColor(color)}
        >
        </button>))}
    </div>
  </Popover>
)
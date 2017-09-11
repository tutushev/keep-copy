import { ChangeFilterAction, SETTINGS } from './types'

export function changeFilter(value: string): ChangeFilterAction {
  return {
    type: SETTINGS.CHANGE_FILTER,
    payload: value
  }
}

import { LocalDataAction } from './localData/types'
import { SettingsAction } from './settings/types'

export type Action =
  | LocalDataAction
  | SettingsAction
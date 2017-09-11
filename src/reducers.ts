import { combineReducers } from 'redux';
import { History } from 'history';

import { localDataReducer } from './models/localData/reducer'
import { settingsReducer} from './models/settings/reducer'
import { LocalDataState } from './models/localData/types'
import { SettingsState } from './models/settings/types'

export interface RootState {
  localData: LocalDataState;
  settings: SettingsState;
}

export default (history: History) =>
  combineReducers({
    localData: localDataReducer,
    settings: settingsReducer,
  });

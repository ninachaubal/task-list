import { combineReducers } from 'redux'
import tasks from './tasks'
import visibleGroup from './visibleGroup'

export default combineReducers({
  tasks,
  visibleGroup
})

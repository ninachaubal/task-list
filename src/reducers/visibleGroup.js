import ALL_TASKS from '../constants/AllTasks'
import ActionTypes from '../constants/ActionTypes'
// Updates the visibleGroup in our state in case of a 'SHOW_TASK_GROUP' action.
export default function(state = ALL_TASKS, action) {
  return action.type === ActionTypes.SHOW_TASK_GROUP ? action.name : state
}

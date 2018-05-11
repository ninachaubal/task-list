import ActionTypes from '../constants/ActionTypes'

// Action creator for displaying a task group by name.
export const showTaskGroup = name => ({
  type: ActionTypes.SHOW_TASK_GROUP,
  name
})

// Action creator for marking a task as complete.
export const markTaskComplete = id => ({
  type: ActionTypes.MARK_TASK_COMPLETE,
  id
})

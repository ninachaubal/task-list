import _ from 'lodash'
import data from '../data'

// Updates the tasks in our state in case of a 'MARK_TASK_COMPLETE' action.
export default function tasks(state = data, action) {
  if (action.type === 'MARK_TASK_COMPLETE') {
    // Check that the task isn't already completed and doesn't have any
    // incomplete dependencies.
    const taskToMark = state.find(task => {
      return task.id === action.id
    })
    if (taskToMark &&
       taskToMark.dependencyIds.length === 0 &&
       taskToMark.completedAt === null) {
      // We can mark this task as complete.
      return state.map(task => {
        if (task === taskToMark) {
          // Mark the task as completed by setting the current timestamp
          // in the completedAt field.
          return {...task, completedAt: Date.now()}
        } else {
          // Remove the completed task from this task's dependency list.
          _.remove(task.dependencyIds, id => id === taskToMark.id)
          return task
        }
      })
    }
  }
  return state
}

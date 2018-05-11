import _ from 'lodash'
import data from './data.json'

// Removes any dependencies that point to tasks that don't exist in our data.
function removeInvalidDependencies (data) {
  // A map of task ids to tasks.
  const idsToTask = {}
  for (const task of data) {
    idsToTask[task.id] = task
  }
  for (const task of data) {
    for (const depId of task.dependencyIds) {
      if (!idsToTask[depId]) {
        // Dependency does not exist.
        _.remove(task.dependencyIds, id => id === depId)
      }
    }
  }
  return data
}

export default removeInvalidDependencies(data)

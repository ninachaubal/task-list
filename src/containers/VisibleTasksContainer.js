import React, { Component } from 'react'
import { connect } from 'react-redux'
import ALL_TASKS from '../constants/AllTasks'
import TaskStatus from '../constants/TaskStatus'
import TaskList from '../components/TaskList/TaskList'
import {markTaskComplete, showTaskGroup} from '../actions'

// Container component that wraps around TaskList.
class VisibleTasksContainer extends Component {
  render () {
    return (
      <TaskList {...this.props} />
    )
  }
}

// Returns tasks in the current visbileGroup, or all tasks if visibleGroup is
// "All Tasks".
export function getVisibleTasks (tasks, visibleGroup) {
  if (visibleGroup === ALL_TASKS) {
    return tasks.map(transformTask)
  } else {
    return tasks.filter(task => task.group === visibleGroup).map(transformTask)
  }
}

// Returns a object with the required props for the Task component.
function transformTask (task) {
  // Determine task status.
  let status
  if (task.completedAt !== null) {
    status = TaskStatus.COMPLETED
  } else if (task.dependencyIds.length === 0) {
    status = TaskStatus.INCOMPLETE
  } else {
    status = TaskStatus.LOCKED
  }
  return {
    id: task.id,
    text: task.task,
    status: status
  }
}

function mapStateToProps (state) {
  return {
    title: state.visibleGroup,
    tasks: getVisibleTasks(state.tasks, state.visibleGroup)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    markTaskComplete: id => dispatch(markTaskComplete(id)),
    showAllTasks: () => dispatch(showTaskGroup(ALL_TASKS))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTasksContainer)

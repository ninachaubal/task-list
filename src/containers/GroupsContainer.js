import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskGroupList from '../components/TaskGroupList/TaskGroupList'
import { showTaskGroup } from '../actions'

// Container component that wraps around TaskGroupList.
class GroupsContainer extends Component {
  render () {
    return (
      <TaskGroupList {...this.props} />
    )
  }
}

// Aggregates tasks by group and returns an array of objects with the required
// shape for the TaskGroupList component's props.
export function getGroups (tasks) {
  // This is a map from a group's name to the object we are building to pass to
  // TaskGroupList.
  const groupNameToGroupProps = {}

  for (const task of tasks) {
    const groupName = task.group
    if (!groupNameToGroupProps[groupName]) {
      // This is the first task we've seen from this group.
      groupNameToGroupProps[groupName] = {
        name: groupName,
        totalTasks: 1,
        completedTasks: task.completedAt === null ? 0 : 1
      }
    } else {
      // Update task counts for this group.
      groupNameToGroupProps[groupName].totalTasks++
      if (task.completedAt !== null) {
        groupNameToGroupProps[groupName].completedTasks++
      }
    }
  }
  // Convert our map to an array of it's values.
  return Object.values(groupNameToGroupProps)
}

function mapStateToProps (state) {
  return {
    groups: getGroups(state.tasks)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    showTaskGroup: name => dispatch(showTaskGroup(name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsContainer)

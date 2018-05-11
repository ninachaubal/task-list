import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskGroup from './TaskGroup.js'
import styles from './TaskGroupList.module.css'

// Displays a list of task groups.
export default class TaskGroupList extends Component {
  render () {
    return (
      <div>
        <div>
          <h1 className={styles.Title}>Things To Do</h1>
        </div>
        <ul className={styles.List}>
          {this.props.groups.map((group) => (
            <TaskGroup key={group.name}
              name={group.name}
              totalTasks={group.totalTasks}
              completedTasks={group.completedTasks}
              showTaskGroup={this.props.showTaskGroup}
            />
          ))}
        </ul>
      </div>
    )
  }
}

TaskGroupList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      totalTasks: PropTypes.number.isRequired,
      completedTasks: PropTypes.number.isRequired
    })
  ).isRequired,
  showTaskGroup: PropTypes.func.isRequired
}

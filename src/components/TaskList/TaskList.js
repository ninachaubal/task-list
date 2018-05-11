import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskStatus from '../../constants/TaskStatus'
import Task from './Task.js'
import styles from './TaskList.module.css'

// Displays a list of tasks.
export default class TaskList extends Component {
  render () {
    return (
      <div>
        <div className={styles.Container}>
          <h1 className={styles.Title}>{this.props.title}</h1>
          <a className={styles.AllGroups} onClick={() => this.props.showAllTasks()}>ALL GROUPS</a>
        </div>
        <ul className={styles.List}>
          {this.props.tasks.map((task) => (
            <Task key={task.id}
              id={task.id}
              text={task.text}
              status={task.status}
              markTaskComplete={this.props.markTaskComplete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      status: PropTypes.oneOf([TaskStatus.LOCKED, TaskStatus.INCOMPLETE, TaskStatus.COMPLETED]).isRequired
    })
  ).isRequired,
  markTaskComplete: PropTypes.func.isRequired,
  showAllTasks: PropTypes.func.isRequired
}

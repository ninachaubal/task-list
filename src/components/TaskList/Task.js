import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskStatus from '../../constants/TaskStatus'
import lockedIcon from '../../assets/Locked.svg'
import incompleteIcon from '../../assets/Incomplete.svg'
import completedIcon from '../../assets/Completed.svg'
import styles from './Task.module.css'

// Displays a single task.
export default class Task extends Component {
  render () {
    // Pick icons and classes based on the task's status.
    let icon = incompleteIcon
    let taskClassName = styles.Task
    if (this.props.status === TaskStatus.LOCKED) {
      icon = lockedIcon
      taskClassName += ` ${styles.Locked}`
    } else if (this.props.status === TaskStatus.COMPLETED) {
      icon = completedIcon
      taskClassName += ` ${styles.Completed}`
    }
    return (
      <li className={styles.ListItem} onClick={() => this.props.markTaskComplete(this.props.id)}>
        <img src={icon} className={styles.Icon} alt={this.props.status} />
        <span className={taskClassName}>{this.props.text}</span>
      </li>
    )
  }
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.oneOf([TaskStatus.LOCKED, TaskStatus.INCOMPLETE, TaskStatus.COMPLETED]).isRequired,
  markTaskComplete: PropTypes.func.isRequired
}

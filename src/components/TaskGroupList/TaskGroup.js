import React, { Component } from 'react'
import PropTypes from 'prop-types'
import icon from '../../assets/Group.svg'
import styles from './TaskGroup.module.css'

// Displays a single task group.
export default class TaskGroup extends Component {
  render () {
    return (
      <li className={styles.ListItem} onClick={() => this.props.showTaskGroup(this.props.name)}>
        <img src={icon} className={styles.Icon} alt='group' />
        <span className={styles.Name}>
          {this.props.name}
        </span>
        <span className={styles.Status}>
          {this.props.completedTasks} OF {this.props.totalTasks} TASKS COMPLETE
        </span>
      </li>
    )
  }
}

TaskGroup.propTypes = {
  name: PropTypes.string.isRequired,
  totalTasks: PropTypes.number.isRequired,
  completedTasks: PropTypes.number.isRequired,
  showTaskGroup: PropTypes.func.isRequired
}

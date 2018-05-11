import React, { Component } from 'react'
import GroupsContainer from '../containers/GroupsContainer'
import VisibleTasksContainer from '../containers/VisibleTasksContainer'
import styles from './App.module.css'

// Top level App component
export default class App extends Component {
  render () {
    return (
      <div className={styles.Container}>
        <GroupsContainer className={styles.Groups} />
        <VisibleTasksContainer className={styles.Tasks} />
      </div>
    )
  }
}

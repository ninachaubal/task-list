/* global test, describe, it, expect, jest */

import ALL_TASKS from '../constants/AllTasks'
import TaskStatus from '../constants/TaskStatus'
import {getVisibleTasks} from './VisibleTasksContainer'

describe('VisibleTasksContainer getVisibleTasks', () => {
  it('should return all tasks when visibleTasks is All Tasks', () => {
    const tasks = [{
      id: 1,
      group: 'Task Group 1',
      task: 'Run tests',
      dependencyIds: [],
      completedAt: null
    }, {
      id: 2,
      group: 'Task Group 2',
      task: 'Run more tests',
      dependencyIds: [],
      completedAt: null
    }]

    const expectedVisibleTasks = [{
      id: 1,
      text: 'Run tests',
      status: TaskStatus.INCOMPLETE
    }, {
      id: 2,
      text: 'Run more tests',
      status: TaskStatus.INCOMPLETE
    }]

    expect(getVisibleTasks(tasks, ALL_TASKS)).toEqual(expect.arrayContaining(expectedVisibleTasks))
  })

  it('should filter by task group name', () => {
    const tasks = [{
      id: 1,
      group: 'Task Group 1',
      task: 'Run tests',
      dependencyIds: [],
      completedAt: null
    }, {
      id: 2,
      group: 'Task Group 2',
      task: 'Run more tests',
      dependencyIds: [],
      completedAt: null
    }, {
      id: 3,
      group: 'Task Group 1',
      task: 'Run even more tests',
      dependencyIds: [],
      completedAt: null
    }]

    const expectedVisibleTasks = [{
      id: 1,
      text: 'Run tests',
      status: TaskStatus.INCOMPLETE
    }, {
      id: 3,
      text: 'Run even more tests',
      status: TaskStatus.INCOMPLETE
    }]

    expect(getVisibleTasks(tasks, 'Task Group 1')).toEqual(expect.arrayContaining(expectedVisibleTasks))
  })

  it('should return correct task statuses', () => {
    const tasks = [{
      id: 1,
      group: 'Task Group 1',
      task: 'Run tests',
      dependencyIds: [],
      completedAt: Date.now()
    }, {
      id: 2,
      group: 'Task Group 2',
      task: 'Run more tests',
      dependencyIds: [],
      completedAt: null
    }, {
      id: 3,
      group: 'Task Group 1',
      task: 'Run even more tests',
      dependencyIds: [2],
      completedAt: null
    }]

    const expectedVisibleTasks = [{
      id: 1,
      text: 'Run tests',
      status: TaskStatus.COMPLETED
    }, {
      id: 2,
      text: 'Run more tests',
      status: TaskStatus.INCOMPLETE
    }, {
      id: 3,
      text: 'Run even more tests',
      status: TaskStatus.LOCKED
    }]

    expect(getVisibleTasks(tasks, ALL_TASKS)).toEqual(expect.arrayContaining(expectedVisibleTasks))
  })
})

/* global test, describe, it, expect, jest */

import {getGroups} from './GroupsContainer'

describe('GroupsContainer getGroups', () => {
  it('should aggregate tasks by group', () => {
    const tasks = [{
      id: 1,
      group: 'Task Group 1',
      completedAt: null
    }, {
      id: 2,
      group: 'Task Group 2',
      completedAt: null
    }]
    const expectedGroups = [{
      name: 'Task Group 1',
      totalTasks: 1,
      completedTasks: 0
    }, {
      name: 'Task Group 2',
      totalTasks: 1,
      completedTasks: 0
    }]
    expect(getGroups(tasks)).toEqual(expectedGroups)
  })

  it('should return the correct task counts', () => {
    const tasks = [{
      id: 1,
      group: 'Task Group 1',
      completedAt: Date.now()
    }, {
      id: 2,
      group: 'Task Group 1',
      completedAt: null
    }, {
      id: 3,
      group: 'Task Group 1',
      completedAt: Date.now()
    }]
    const expectedGroups = [{
      name: 'Task Group 1',
      totalTasks: 3,
      completedTasks: 2
    }]
    expect(getGroups(tasks)).toEqual(expectedGroups)
  })
})

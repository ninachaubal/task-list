/* global test, describe, it, expect, jest */

import data from '../data'
import ActionTypes from '../constants/ActionTypes'
import reducer from './tasks'

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(data)
  })

  it('should handle MARK_TASK_COMPLETE', () => {
    const state = [
      {
        "id": 1,
        "group": "Test Group 1",
        "task": "Run tests",
        "dependencyIds": [],
        "completedAt": null
      },
    ]
    const updatedState = reducer(state, {
      type: ActionTypes.MARK_TASK_COMPLETE,
      id: 1
    })
    expect(updatedState[0].completedAt).not.toBeNull()
  })

  it('should handle MARK_TASK_COMPLETE and udpate dependencies', () => {
    const state = [
      {
        "id": 1,
        "group": "Test Group 1",
        "task": "Run tests",
        "dependencyIds": [],
        "completedAt": null
      },
      {
        "id": 2,
        "group": "Test Group 1",
        "task": "Run more tests",
        "dependencyIds": [1],
        "completedAt": null
      },
    ]
    const updatedState = reducer(state, {
      type: ActionTypes.MARK_TASK_COMPLETE,
      id: 1
    })
    expect(updatedState[0].completedAt).not.toBeNull()
    expect(updatedState[1].dependencyIds).not.toContain(1)
  })

  it('should not handle MARK_TASK_COMPLETE if the task is already completed', () => {
    const state = [
      {
        "id": 1,
        "group": "Test Group 1",
        "task": "Run tests",
        "dependencyIds": [],
        "completedAt": Date.now()
      },
    ]
    expect(reducer(state, {
      type: ActionTypes.MARK_TASK_COMPLETE,
      id: 1
    })).toEqual(state)
  })

  it('should not handle MARK_TASK_COMPLETE if the task has a dependency', () => {
    const state = [
      {
        "id": 1,
        "group": "Test Group 1",
        "task": "Run tests",
        "dependencyIds": [2],
        "completedAt": null
      },
    ]
    expect(reducer(state, {
      type: ActionTypes.MARK_TASK_COMPLETE,
      id: 1
    })).toEqual(state)
  })

  it('should not handle SHOW_TASK_GROUP', () => {
    const state = [
      {
        "id": 1,
        "group": "Test Group 1",
        "task": "Run tests",
        "dependencyIds": [],
        "completedAt": null
      },
    ]
    expect(reducer(state, {
      type: ActionTypes.SHOW_TASK_GROUP,
      name: 'Task Group 1'
    })).toEqual(state)
  })
})

/* global test, describe, it, expect, jest */

import ALL_TASKS from '../constants/AllTasks'
import ActionTypes from '../constants/ActionTypes'
import reducer from './visibleGroup'

describe('visibleGroup reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(ALL_TASKS)
  })

  it('should handle SHOW_TASK_GROUP', () => {
    expect(reducer(ALL_TASKS, {
      type: ActionTypes.SHOW_TASK_GROUP,
      name: 'Task Group 1'
    })).toEqual('Task Group 1')
  })
  
  it('should not handle MARK_TASK_COMPLETE', () => {
    expect(reducer(ALL_TASKS, {
      type: ActionTypes.MARK_TASK_COMPLETE,
      id: 1
    })).toEqual(ALL_TASKS)
  })
})

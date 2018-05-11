/* global test, describe, it, expect, jest */

import ActionTypes from '../constants/ActionTypes'
import { showTaskGroup, markTaskComplete } from './index'

describe('action creators', () => {
  it('should create an action to show a task group', () => {
    const name = 'Task Group 1'
    const expectedAction = {
      type: ActionTypes.SHOW_TASK_GROUP,
      name
    }
    expect(showTaskGroup(name)).toEqual(expectedAction)
  })

  it('should create an action to mark a task as completed', () => {
    const id = 1
    const expectedAction = {
      type: ActionTypes.MARK_TASK_COMPLETE,
      id
    }
    expect(markTaskComplete(id)).toEqual(expectedAction)
  })
})

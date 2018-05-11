/* global test, describe, it, expect, jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import TaskGroup from './TaskGroup'

Enzyme.configure({ adapter: new Adapter() });

describe('TaskGroup component', () => {
  const showTaskGroup = jest.fn()
  let enzymeWrapper
  const props = {
    name: 'Task Group 1',
    totalTasks: 5,
    completedTasks: 2,
    showTaskGroup: showTaskGroup
  }

  beforeEach(() => {
    // render the component once up here in this block. It runs before each test.
    enzymeWrapper = shallow(<TaskGroup {...props} />)
  });

  it('should render a list item', () => {
    expect(enzymeWrapper.find('li').hasClass('ListItem')).toBe(true)
  })

  it('should call showTaskGroup when list item clicked', () => {
    enzymeWrapper.find('li').at(0).simulate('click')
    expect(showTaskGroup).toHaveBeenCalled();
  })

  it('should render an icon', () => {
    expect(enzymeWrapper.find('img').hasClass('Icon')).toBe(true)
  })

  it('should render group name', () => {
    expect(enzymeWrapper.find('.Name').text()).toBe('Task Group 1')
  })

  it('should render task completion status', () => {
    expect(enzymeWrapper.find('.Status').text()).toBe('2 OF 5 TASKS COMPLETE')
  })
})

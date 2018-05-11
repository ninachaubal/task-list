/* global test, describe, it, expect, jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import TaskStatus from '../../constants/TaskStatus'
import Task from './Task'

Enzyme.configure({ adapter: new Adapter() });

describe('Task component', () => {
  const markTaskComplete = jest.fn()
  let enzymeWrapper
  const props = {
    id: 1,
    text: 'Run tests',
    status: TaskStatus.INCOMPLETE,
    markTaskComplete: markTaskComplete
  }


  beforeEach(() => {
    // render the component once up here in this block. It runs before each test.
    enzymeWrapper = shallow(<Task {...props} />)
  });

  it('should render a list item', () => {
    expect(enzymeWrapper.find('li').hasClass('ListItem')).toBe(true)
  })

  it('should call markTaskComplete when list item clicked', () => {
    enzymeWrapper.find('li').at(0).simulate('click')
    expect(markTaskComplete).toHaveBeenCalled();
  })

  it('should render an icon', () => {
    expect(enzymeWrapper.find('img').hasClass('Icon')).toBe(true)
  })

  it('should render the task text', () => {
    expect(enzymeWrapper.find('.Task').text()).toBe('Run tests')
  })

  it('should render an incomplete task if status is incomplete', () => {
    expect(enzymeWrapper.find('img').props().src).toBe('Incomplete.svg')
    expect(enzymeWrapper.find('.Task').hasClass('Completed')).toBe(false)
    expect(enzymeWrapper.find('.Task').hasClass('Locked')).toBe(false)
  })

  it('should render a completed task if status is completed', () => {
    enzymeWrapper.setProps({status: TaskStatus.COMPLETED})
    expect(enzymeWrapper.find('img').props().src).toBe('Completed.svg')
    expect(enzymeWrapper.find('.Task').hasClass('Completed')).toBe(true)
    expect(enzymeWrapper.find('.Task').hasClass('Locked')).toBe(false)
  })

  it('should render a locked task if status is locked', () => {
    enzymeWrapper.setProps({status: TaskStatus.LOCKED})
    expect(enzymeWrapper.find('img').props().src).toBe('Locked.svg')
    expect(enzymeWrapper.find('.Task').hasClass('Completed')).toBe(false)
    expect(enzymeWrapper.find('.Task').hasClass('Locked')).toBe(true)
  })
})

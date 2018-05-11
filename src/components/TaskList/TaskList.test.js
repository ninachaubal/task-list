/* global test, describe, it, expect, jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import TaskStatus from '../../constants/TaskStatus'
import TaskList from './TaskList'

Enzyme.configure({ adapter: new Adapter() });

describe('TaskList component', () => {
  let enzymeWrapper
  const showAllTasks = jest.fn()
  const props = {
    title: 'Task Group 1',
    tasks: [{
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
    }],
    markTaskComplete: jest.fn(),
    showAllTasks: showAllTasks
  }

  beforeEach(() => {
    // render the component once up here in this block. It runs before each test.
    enzymeWrapper = shallow(<TaskList {...props} />)
  });

  it('should render the title', () => {
    expect(enzymeWrapper.find('h1').hasClass('Title')).toBe(true)
    expect(enzymeWrapper.find('h1').text()).toBe('Task Group 1')
  })

  it('should render a list', () => {
    expect(enzymeWrapper.find('ul').hasClass('List')).toBe(true)
  })

  it('should render an all groups link', () => {
    expect(enzymeWrapper.find('a').hasClass('AllGroups')).toBe(true)
    expect(enzymeWrapper.find('a').text()).toBe('ALL GROUPS')
  })

  it('should call showAllTasks when all groups link clicked', () => {
    enzymeWrapper.find('a').at(0).simulate('click')
    expect(showAllTasks).toHaveBeenCalled();
  })

  it('should render three Task elements', () => {
    expect(enzymeWrapper.find('Task')).toHaveLength(3)
  })

  it('should pass correct props to Task elements', () => {
    const task1Props = enzymeWrapper.find('Task').at(0).props()
    expect(task1Props.id).toEqual(1)
    expect(task1Props.text).toEqual('Run tests')
    expect(task1Props.status).toEqual(TaskStatus.COMPLETED)

    const task2Props = enzymeWrapper.find('Task').at(1).props()
    expect(task2Props.id).toEqual(2)
    expect(task2Props.text).toEqual('Run more tests')
    expect(task2Props.status).toEqual(TaskStatus.INCOMPLETE)

    const task3Props = enzymeWrapper.find('Task').at(2).props()
    expect(task3Props.id).toEqual(3)
    expect(task3Props.text).toEqual('Run even more tests')
    expect(task3Props.status).toEqual(TaskStatus.LOCKED)
  })
})

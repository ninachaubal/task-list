/* global test, describe, it, expect, jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import TaskGroupList from './TaskGroupList'

Enzyme.configure({ adapter: new Adapter() });

describe('TaskGroupList component', () => {
  let enzymeWrapper
  const props = {
    showTaskGroup: jest.fn(),
    groups: [{
      name: 'Task Group 1',
      totalTasks: 5,
      completedTasks: 0,
    }, {
      name: 'Task Group 2',
      totalTasks: 3,
      completedTasks: 2,
    }]
  }

  beforeEach(() => {
    // render the component once up here in this block. It runs before each test.
    enzymeWrapper = shallow(<TaskGroupList {...props} />)
  });

  it('should render the title', () => {
    expect(enzymeWrapper.find('h1').hasClass('Title')).toBe(true)
    expect(enzymeWrapper.find('h1').text()).toBe('Things To Do')
  })

  it('should render a list', () => {
    expect(enzymeWrapper.find('ul').hasClass('List')).toBe(true)
  })

  it('should render two TaskGroup elements', () => {
    expect(enzymeWrapper.find('TaskGroup')).toHaveLength(2)
  })

  it('should pass correct props to TaskGroup elements', () => {
    const taskGroup1Props = enzymeWrapper.find('TaskGroup').at(0).props()
    expect(taskGroup1Props.name).toEqual('Task Group 1')
    expect(taskGroup1Props.totalTasks).toEqual(5)
    expect(taskGroup1Props.completedTasks).toEqual(0)

    const taskGroup2Props = enzymeWrapper.find('TaskGroup').at(1).props()
    expect(taskGroup2Props.name).toEqual('Task Group 2')
    expect(taskGroup2Props.totalTasks).toEqual(3)
    expect(taskGroup2Props.completedTasks).toEqual(2)
  })
})

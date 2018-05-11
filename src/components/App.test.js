/* global test, describe, it, expect, jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  let enzymeWrapper

  beforeEach(() => {
    // render the component once up here in this block. It runs before each test.
    enzymeWrapper = shallow(<App />)
  });

  it('should render a container div', () => {
    expect(enzymeWrapper.find('div').hasClass('Container')).toBe(true)
  })

  it('should render a container for groups', () => {
    expect(enzymeWrapper.find('.Groups').exists()).toBe(true)
  })

  it('should render a container for tasks', () => {
    expect(enzymeWrapper.find('.Tasks').exists()).toBe(true)
  })
})

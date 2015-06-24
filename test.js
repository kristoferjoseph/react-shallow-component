import { expect } from 'chai'
import React from 'react'
import createComponent from './'
import TestComponent from './test-component'

describe('Shallow Component', function() {
  let testComponent

  beforeEach(function() {
    testComponent = createComponent(TestComponent, {title: 'YUP'})
  })

  it('should exist', function() {
    expect(createComponent).to.exist
  });

  it('should render test component', function() {
    expect(testComponent).to.exist
  });

  it('should output shallow component render', function() {
    expect(testComponent.props.children).to.equal('YUP')
  });

})

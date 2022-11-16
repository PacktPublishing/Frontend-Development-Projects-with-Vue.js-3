import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card', () => {
  it('renders properly', () => {
    const wrapper = mount(Card, { 
      slots: {
        image: '<div id="image">Main Image</div>',
        title: '<h2>Main Title</h2>',
        description: '<p>Main Description</p>',
      }
     })
    expect(wrapper.find('#image').text()).toContain('Main Image')
    expect(wrapper.find('h2').text()).toContain('Main Title')
    expect(wrapper.find('p').text()).toContain('Main Description')
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Example from '../Example8-01.vue'

describe('Example8-01.vue', () => {
  it('should render message', () => {
    const message = 'hello'
    const wrapper = mount(Example, {
      data() {
        return {
            message
        }
      },
    })
    
    expect(wrapper.find('.message--display span').text()).toBe(message)
  })
})
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Exercise from '../Exercise8-01.vue'

describe('Exercise8-01.vue', () => {
  it('should render message', () => {
    const message = 'hello'
    const wrapper = mount(Exercise, {
      data() {
        return {
            message
        }
      },
    })
    
    expect(wrapper.find('.message--display span').text()).toBe(message)
  })
  it('should not render message', () => {
    const msg = 'new message'
    const wrapper = mount(Exercise, {
      data() {
        return {
          message: ''
        }
      },
      propsData: { msg }
    })
    
    expect(wrapper.find('.message--display').exists()).toBe(false)
  })
})
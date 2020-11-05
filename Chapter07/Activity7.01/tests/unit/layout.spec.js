import { shallowMount } from '@vue/test-utils'
import MessageLayout from '@/layouts/messageLayout.vue'

describe('MessageLayout.vue', () => {
  it('should render ', () => {
    const wrapper = shallowMount(MessageLayout)
    
    expect(wrapper.find('h2').text()).toBe('Message content:')
  })
})
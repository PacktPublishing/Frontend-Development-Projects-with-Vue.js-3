import { shallowMount } from '@vue/test-utils'
import Message from '@/views/Message.vue'

describe('Message.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Message, {
        propsData: { content: '123' }
    })
    expect(wrapper.text()).toBe('123');
  })
})
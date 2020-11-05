import { shallowMount } from '@vue/test-utils'
import Message from '@/views/Message.vue'

describe('Message.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Message, {
        stubs: ["router-view"],
        propsData: {
            content: '123'
        }
    })
    expect(wrapper.find('p').text()).toBe('123');
  })
})
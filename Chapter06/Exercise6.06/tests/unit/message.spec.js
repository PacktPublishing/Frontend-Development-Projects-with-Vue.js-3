import { shallowMount } from '@vue/test-utils'
import Message from '@/views/Message.vue'

describe('Message.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Message, {
        propsData: { message: { content: '123'} },
        stubs: ['router-link', 'router-view']
    })
    expect(wrapper.find('p').text()).toBe('Message content: 123');
  })
})
import { shallowMount } from '@vue/test-utils'
import MessageInfo from '@/views/MessageInfo.vue'

describe('Message.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MessageInfo, {
        propsData: { message: { sent: '123'} },
    })
    expect(wrapper.find('p').text()).toBe('123');
    expect(wrapper.find('h3').text()).toBe('Message info:');
  })
})
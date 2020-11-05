import { shallowMount } from '@vue/test-utils'
import MessageAuthor from '@/views/MessageAuthor.vue'

describe('Message.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MessageAuthor, {
        propsData: { message: { author: '123'} },
    })
    expect(wrapper.find('p').text()).toBe('123');
    expect(wrapper.find('h3').text()).toBe('Author:');
  })
})
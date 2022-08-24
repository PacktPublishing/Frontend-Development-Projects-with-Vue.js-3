import { shallowMount } from '@vue/test-utils'
import MessageFeed from '@/views/MessageFeed.vue'

describe('MessageFeed.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MessageFeed)
    expect(wrapper.find('h2').text()).toBe('Message Feed');
    expect(wrapper.findAll('p').at(1).text()).toBe('The weather is nice');
  })
})
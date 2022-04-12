import { shallowMount } from '@vue/test-utils'
import MessageList from '@/views/MessageList.vue'
import { describe, expect, it } from 'vitest'

describe('MessageList.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MessageList, {
        stubs: ["router-link"]
    })
    expect(wrapper.find('h2').text()).toBe('Message Feed');
  })
})
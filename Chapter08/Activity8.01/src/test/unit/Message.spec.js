import { shallowMount } from '@vue/test-utils'
import Message from '@/views/Message.vue'
import { describe, expect, it } from 'vitest'

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
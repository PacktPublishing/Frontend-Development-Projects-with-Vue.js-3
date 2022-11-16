import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import MessageEditor from '../MessageEditor.vue'

describe('MessageEditor', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MessageEditor)
    expect(wrapper.find('textarea').isVisible()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Send');
  })
})

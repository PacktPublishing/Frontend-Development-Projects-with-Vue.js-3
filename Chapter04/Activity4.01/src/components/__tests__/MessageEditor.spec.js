import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MessageEditor from '../MessageEditor.vue'

describe('MessageEditor', () => {
  it('renders properly', () => {
    const wrapper = mount(MessageEditor, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TextEditorWithCount from '../TextEditorWithCount.vue'

describe('TextEditorWithCount', () => {
  it('renders properly', () => {
    const wrapper = mount(TextEditorWithCount, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

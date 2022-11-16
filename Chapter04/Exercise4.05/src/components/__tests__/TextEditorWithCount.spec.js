import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TextEditorWithCount from '../TextEditorWithCount.vue'

describe('TextEditorWithCount', () => {
  it('renders properly', () => {
    const wrapper = mount(TextEditorWithCount)

    wrapper.find('textarea').setValue('Hello')

    expect(wrapper.find('textarea').element.value).toBe('Hello')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Repeat from '../Repeat.vue'

describe('Repeat', () => {
  it('renders properly', () => {
    const wrapper = mount(Repeat, { props: { config: { times: 1, content: 'Hello' } } })
    expect(wrapper.text()).toContain('Hello')
  })
})

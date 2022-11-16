import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Repeat from '../Repeat.vue'

describe('Repeat', () => {
  it('renders properly', () => {
    const wrapper = mount(Repeat, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

import { shallowMount } from '@vue/test-utils'
import Default from '@/layouts/default.vue'

describe('Default.vue', () => {
  it('should render ', () => {
    const wrapper = shallowMount(Default)
    
    expect(wrapper.find('h1').text()).toBe('Messages section')
  })
})
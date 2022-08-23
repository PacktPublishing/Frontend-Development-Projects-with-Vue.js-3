import { shallowMount } from '@vue/test-utils'
import About from '@/views/AboutView.vue'

describe('About.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.text()).toMatch('This is an about page');
  })
})
import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise1-05.vue'

describe('Exercise1-05.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'PUG component!'
    const wrapper = shallowMount(Exercise, {})

    wrapper.setData({ title: title })

    expect(wrapper.find('h1').text()).toMatch(title)
  })
})

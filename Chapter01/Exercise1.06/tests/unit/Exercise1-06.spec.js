import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise1-06.vue'

describe('Exercise1-06.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('hidden elements to not be rendered', () => {
    expect(wrapper.find('h1')).toEqual({ selector: 'h1' })
    expect(wrapper.find('h2')).toEqual({ selector: 'h2' })
  })

  it('renders anchor tag with data', () => {
    const link = {
      url: 'https://google.com',
      target: '_blank',
      tabindex: '0',
      title: 'Go to Google',
    }

    wrapper.setData({
      link: link,
    })

    expect(wrapper.find('a').text()).toMatch(link.title)
  })
})

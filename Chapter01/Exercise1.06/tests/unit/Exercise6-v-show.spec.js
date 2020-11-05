import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise6-v-show.vue'

describe('Exercise6-v-show.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('hidden elements to not be rendered', () => {
    expect(wrapper.find('h1')).toEqual({})
    expect(wrapper.find('h2')).toEqual({})
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

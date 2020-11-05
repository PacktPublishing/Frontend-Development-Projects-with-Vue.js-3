import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise1-03.vue'

describe('Exercise1-03.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'My list component!'
    const subtitle = 'Vue JS basics'
    const wrapper = shallowMount(Exercise, {
      propsData: { title },
    })

    wrapper.setData({ subtitle: subtitle, title: title })

    expect(wrapper.text()).toMatch(title)
    expect(wrapper.find('h2').text()).toMatch(subtitle)
  })

  it('renders list items from the array', () => {
    const array = ['Item 1', 'Item 2', 'Item 3']
    const wrapper = shallowMount(Exercise, {})

    wrapper.setData({ items: array })

    expect(
      wrapper
        .findAll('li')
        .at(0)
        .text()
    ).toMatch(array[0])
    expect(
      wrapper
        .findAll('li')
        .at(1)
        .text()
    ).toMatch(array[1])
    expect(
      wrapper
        .findAll('li')
        .at(2)
        .text()
    ).toMatch(array[2])
  })
})

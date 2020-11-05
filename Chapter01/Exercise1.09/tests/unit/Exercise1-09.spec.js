import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise1-09.vue'

describe('Exercise1-09.vue', () => {
  
  it('array outputs correctly', () => {
    const array = [
      {
        title: 'TV',
        favorite: ['Designated Survivor', 'Spongebob'],
      },
      {
        title: 'Games',
        favorite: ['CS:GO'],
      },
      {
        title: 'Sports',
        favorite: [],
      },
    ]
    
    const wrapper = shallowMount(Exercise, {
      propsData: {
        array
      }
    })

    expect(wrapper.html()).toContain(array[0].title)
    expect(wrapper.html()).toContain(array[1].favorite[0])
    expect(wrapper.html()).toContain(array[2].title)
  })
})

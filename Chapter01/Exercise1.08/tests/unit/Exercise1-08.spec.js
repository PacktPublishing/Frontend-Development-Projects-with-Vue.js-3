import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise1-08.vue'

describe('Exercise1-08.vue', () => {
  
  it('array outputs data into template', () => {
    const array = ['TV', 'Games', 'Sports']
    
    const wrapper = shallowMount(Exercise, {
      propsData: {
        array
      }
    })

    expect(wrapper.html()).toContain(array[0])
    expect(wrapper.html()).toContain(array[1])
    expect(wrapper.html()).toContain(array[2])
  })
})

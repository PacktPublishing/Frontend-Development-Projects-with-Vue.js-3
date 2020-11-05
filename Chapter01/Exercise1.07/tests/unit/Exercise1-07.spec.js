import { mount } from '@vue/test-utils'
import Exercise from '@/components/Exercise1-07.vue'

describe('Exercise1-07.vue', () => {
  
  it('data returns correctly in list element', () => {
    const name = 'John Doe'
    const language = 'Javascript'
    
    const wrapper = mount(Exercise, {
      propsData: {
        name,
        language,
      }
    })

    expect(wrapper.html()).toContain(name)
    expect(wrapper.html()).toContain(language)
  })
})

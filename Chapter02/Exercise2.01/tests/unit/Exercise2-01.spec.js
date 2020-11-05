import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2-01.vue'

describe('Exercise2-01.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('comput fullname correctly', () => {
    const firstName = 'John'
    const lastName = 'Doe'

    wrapper.setData({
      firstName: firstName,
      lastName: lastName,
    })
    expect(wrapper.vm.fullName).toEqual(`${firstName} ${lastName}`)
  })
})

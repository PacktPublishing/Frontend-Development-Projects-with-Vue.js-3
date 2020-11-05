import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2-04.vue'

describe('Exercise2-04.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('watcher updates price value', async () => {
    // Check update
    await wrapper.vm.updatePrice()
    expect(wrapper.vm.product.price).toEqual(24)
    expect(wrapper.vm.discount).toEqual(1)

    // Check if statement on line 28
    for (let index = 0; index < 25; index++) {
      await wrapper.vm.updatePrice()
    }
    expect(wrapper.vm.product.price).toEqual(0)
    expect(wrapper.vm.discount).toEqual(25)
  })
})

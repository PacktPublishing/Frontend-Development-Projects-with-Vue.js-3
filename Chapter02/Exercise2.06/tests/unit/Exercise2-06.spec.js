import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2-06.vue'

describe('Exercise2-06.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('blockquote condition exists', async () => {
    const blockquote = wrapper.find('blockquote')
    expect(blockquote.exists()).toBe(false)
  })
  it('async api fetches', async () => {
    await wrapper.vm.getApi()
    expect(wrapper.vm.quote).toContain(wrapper.vm.response.slip.advice)
  })
})

import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2-05.vue'

describe('Exercise2-05.vue', () => {
  const wrapper = shallowMount(Exercise, {})
  const expectedList = [
    'Vue'
  ]
  it('search with method', async () => {
    const textInput = wrapper.find('input[placeholder="Search with method"]')
    await textInput.setValue('v')
    wrapper.vm.searchMethod()

    expect(wrapper.vm.methodFilterList).toEqual(expectedList)
  })
  it('search with computed', async () => {
    const textInput = wrapper.find('input[placeholder="Search with computed"]')
    await textInput.setValue('v')
    wrapper.vm.searchMethod()

    expect(wrapper.vm.computedList).toEqual(expectedList)
  })
  it('search with watch', async () => {
    const textInput = wrapper.find('input[placeholder="Search with watcher"]')
    await textInput.setValue('v')

    expect(wrapper.vm.watchFilterList).toEqual(expectedList)
  })
})

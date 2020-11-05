import { shallowMount } from '@vue/test-utils'
import Exercise from '@/App.vue'

describe('Activity 1', () => {
  const { vm } = shallowMount(Exercise)
  const list = ['Item 1', 'Item 2']

  it('addItem should add Array item', () => {
    // Check default state
    expect(vm.shoppingList).toStrictEqual([])
    expect(vm.input).toStrictEqual('')
    // Set input mocking user behaviour
    vm.input = 'New Item'
    // Run addItem
    vm.addItem()
    // Expect new item in list
    expect(vm.shoppingList).toEqual(['New Item'])
  })

  it('addItem return if no input', () => {
    vm.shoppingList = []
    // Check default state
    expect(vm.input).toStrictEqual('')
    expect(vm.shoppingList).toEqual([])
    // Run addItem
    vm.addItem()
    // Should not add item if vm.input is empty
    expect(vm.shoppingList).toEqual([])
  })

  it('deleteItem should remove Array items', () => {
    // Mock list state when multiple entries were added
    vm.shoppingList = list
    vm.deleteItem(1)
    // Expect the 2nd item in array to be removed
    expect(vm.shoppingList).toEqual(['Item 1'])
  })

  it('deleteItem without args should replace Array', () => {
    // Mock list state when multiple entries were added
    vm.shoppingList = list
    vm.deleteItem()
    // Expect whole array to be empty
    expect(vm.shoppingList).toEqual([])
  })
})

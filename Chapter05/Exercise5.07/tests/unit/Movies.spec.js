import { shallowMount } from '@vue/test-utils'
import Movies from '@/components/Movies.vue'
import { describe, it, expect } from 'vitest'

describe('Movies.vue', () => {
  const wrapper = shallowMount(Movies, {})

  it('render movies correctly', () => {
    expect(wrapper.findAll('li').length).toBe(3)
  })
})

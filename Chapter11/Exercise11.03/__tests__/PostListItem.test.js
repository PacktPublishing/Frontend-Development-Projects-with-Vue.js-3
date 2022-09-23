import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils';
import PostListItem from '../src/components/PostListItem.vue';

describe('PostListItem', () => {
  it('PostListItem renders title and description correctly', () => {
    
    const wrapper = shallowMount(PostListItem, {
      propsData: {
          title: "Blog post title",
          description: "Blog post description"
      }
    })
    expect(wrapper.text()).toMatch("Blog post title")
    expect(wrapper.text()).toMatch("Blog post description")
  })

  it('PostListItem renders tags with a # prepended to them', () => {
    
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        tags: ['react', 'vue']
      }
    })
    expect(wrapper.text()).toMatch('#react')
    expect(wrapper.text()).toMatch('#vue')
  })

	it('truncated properly returns only the first 8 characters', () => {

		const wrapper = shallowMount(PostListItem, {
			propsData: {
				title: "Blog post title",
				description: "Blog post description"
			}
		})
		expect(wrapper.vm.truncated).toMatch('Blog pos')

	})

	it('truncated properly doesnt change shorter values', () => {

		const wrapper = shallowMount(PostListItem, {
			propsData: {
				title: "Blog post title",
				description: "Test"
			}
		})
		expect(wrapper.vm.truncated).toMatch('Test')

	})

})


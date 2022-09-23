import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils';
import PostListItem from '../src/components/PostListItem.vue';

describe('ellipsis', () => {

	it('elllipsis should do nothing if value is less than 50 characters', () => {

		const wrapper = shallowMount(PostListItem, {
			propsData: {
				title: "Blog post title",
				description: "Test"
			}
		})
		expect(wrapper.vm.truncated).toMatch('Test')

	})

	it('elllipsis should do nothing if value is less than 50 characters', () => {

		const wrapper = shallowMount(PostListItem, {
			propsData: {
				title: "Blog post title",
				description: "Should be more than the 50 allowed characters by a small amount"
			}
		})
		expect(wrapper.vm.ellipsis).toMatch('Should be more than the 50 allowed characters by a...')

	})

})


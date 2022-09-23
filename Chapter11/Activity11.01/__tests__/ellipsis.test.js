import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils';
import PostListItem from '../src/components/PostListItem.vue';




describe('ellipsis', () => {

	it('ellipsis should do nothing if value is less than 50 characters', () => {

		const wrapper = shallowMount(PostListItem, {
			propsData: {
				title: "Blog post title",
				description: "Test"
			},
			global: {
				stubs:['router-link'],
			}
		})
		expect(wrapper.vm.truncated).toMatch('Test')

	})

	it('ellipsis should truncate to 50 and append "..." when longer than 50 characters', () => {

		const wrapper = shallowMount(PostListItem, {
			propsData: {
				title: "Blog post title",
				description: "Should be more than the 50 allowed characters by a small amount"
			},
			global: {
				stubs:['router-link']
			}
		})
		expect(wrapper.vm.ellipsis).toMatch('Should be more than the 50 allowed characters by a...')

	})

})


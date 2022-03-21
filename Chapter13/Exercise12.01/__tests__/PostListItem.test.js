import { shallowMount } from '@vue/test-utils'
import PostListItem from '../src/components/PostListItem.vue'

test('PostListItem renders title and description correctly', () => {
  const wrapper = shallowMount(PostListItem, {
    propsData: {
      title: 'Blog post title',
      description: 'Blog post description'
    }
  })
  expect(wrapper.text()).toMatch("Blog post title")
  expect(wrapper.text()).toMatch("Blog post description")
})

test('PostListItem renders tags with a # prepended to them', () => {
  const wrapper = shallowMount(PostListItem, {
    propsData: {
      tags: ['react', 'vue']
    }
  })
  expect(wrapper.text()).toMatch('#react')
  expect(wrapper.text()).toMatch('#vue')
})

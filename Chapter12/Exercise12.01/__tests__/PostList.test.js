import { shallowMount, mount } from '@vue/test-utils'
import PostList from '../src/components/PostList.vue'
import PostListItem from '../src/components/PostListItem.vue'

test('PostList renders the right number of PostListItem', () => {
  const wrapper = shallowMount(PostList, {
    propsData: {
      posts: [
        {
          title: "Blog post title",
          description: "Blog post description"
        }
      ]
    }
  })
  expect(wrapper.findAll(PostListItem)).toHaveLength(1)
})

test('PostList renders passed title and description for each passed post', () => {
  const wrapper = mount(PostList, {
    propsData: {
      posts: [
        {
          title: 'Title 1',
          description: 'Description 1'
        },
        {
          title: 'Title 2',
          description: 'Description 2'
        }
      ]
    }
  })
  const outputText = wrapper.text()
  expect(outputText).toContain('Title 1')
  expect(outputText).toContain('Description 1')
  expect(outputText).toContain('Title 2')
  expect(outputText).toContain('Description 2')
})

test('PostList renders tags for each post', () => {
  const wrapper = mount(PostList, {
    propsData: {
      posts: [
        {
          tags: ['react', 'vue']
        },
        {
          tags: ['html', 'angularjs']
        }
      ]
    }
  })
  const outputText = wrapper.text()
  expect(outputText).toContain('#react')
  expect(outputText).toContain('#vue')
  expect(outputText).toContain('#html')
  expect(outputText).toContain('#angularjs')
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils';
import PostListItem from '../src/components/PostListItem.vue';
import router from '@/router';

describe('PostListItem', () => {
  it('PostListItem renders title and description correctly', () => {
    
    const wrapper = mount(PostListItem, {
      propsData: {
          title: "Blog post title",
          description: "Blog post description"
      },
      global: {
        plugins: [ router ]
      }
    })

    expect(wrapper.text()).toMatch("Blog post title")
    expect(wrapper.text()).toMatch("Blog post description")
  })

  it('PostListItem renders tags with a # prepended to them', () => {
    
    const wrapper = mount(PostListItem, {
      propsData: {
        tags: ['react', 'vue']
      },
   	  global: {
  	  	plugins: [ router ]
	    }
    })
    expect(wrapper.text()).toMatch('#react')
    expect(wrapper.text()).toMatch('#vue')
  })


})


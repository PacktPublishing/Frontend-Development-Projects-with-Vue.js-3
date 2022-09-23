import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils';
import App from '../src/App.vue';

describe('App', () => {
  it('App renders blog title correctly', () => {
    const wrapper = shallowMount(App, {
        global: {
          stubs:['router-link','router-view'],
      }
  })
  expect(wrapper.text()).toContain('The Vue.js Workshop Blog')
  })
})


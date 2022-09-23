import { describe, it, expect, vi } from 'vitest'

import { shallowMount, mount, flushPromises } from '@vue/test-utils';
import SearchForm from '../src/components/PostList.vue';
import App from '../src/App.vue';

import router from '@/router';
import { createTestingPinia } from '@pinia/testing'

describe('SearchForm', () => {

  it('PostList renders tags for each post 2', () => {
    
    const wrapper = shallowMount(SearchForm, {
	  global: {
	  	plugins: [ router ]
	  }
    })

	expect(wrapper.text()).toMatchSnapshot();
  });

  it('SearchForm filter by keyword on submission', async() => {

	router.push('/');
	await router.isReady();

    const wrapper = mount(App, {
	  global: {
	  	plugins: [ router, createTestingPinia({createSpy:vi.fn}) ]
	  }
    })

  	expect(wrapper.text()).toContain('Migrating an AngularJS app to Vue.js');
  	expect(wrapper.text()).toContain('Vue.js for React developers');

	wrapper.find('input[type="text"]').setValue('react');

	await wrapper.find('button#search').trigger('click');
	await wrapper.find('form').trigger('submit');

	await flushPromises();


  	expect(wrapper.text()).not.toContain('Migrating an AngularJS app to Vue.js');
  	expect(wrapper.text()).toContain('Vue.js for React developers');


  });

})

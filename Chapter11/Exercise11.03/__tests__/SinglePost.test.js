import { describe, it, expect } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils'

import App from '../src/App.vue';
import router from "@/router";


describe('SinglePost', () => {

  it('Router renders single post page when clicking a post title', async () => {
    
	router.push('/');
	await router.isReady();

	const wrapper = mount(App, {
		global: {
		plugins: [router]
		}
	})

    expect(wrapper.text()).toMatch("Vue.js for React developers");
    expect(wrapper.text()).toMatch("Migrating an AngularJS app to Vue.js");

	await wrapper.find('a').trigger('click');
	await flushPromises();

    expect(wrapper.text()).toMatch("Vue.js for React developers");
    expect(wrapper.text()).not.toMatch("Migrating an AngularJS app to Vue.js");

  })

  it('Router renders single post page when a slug is set', async () => {
    
	await router.replace('/');
	await router.push('/vue-react');

	const wrapper = mount(App, {
		global: {
		plugins: [router]
		}
	})

    expect(wrapper.text()).toMatch("Vue.js for React developers");
    expect(wrapper.text()).not.toMatch("Migrating an AngularJS app to Vue.js");

  })  

})
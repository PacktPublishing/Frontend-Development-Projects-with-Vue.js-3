import { describe, it, expect, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils'

import App from '../src/App.vue';
import router from "@/router";

import { createTestingPinia } from '@pinia/testing'

describe('TagPage', () => {

  it('Router renders tag page when clicking a tag in the post list item', async () => {
    
	router.push('/');
	await router.isReady();

	const wrapper = mount(App, {
		global: {
			plugins: [router, createTestingPinia({createSpy:vi.fn})]
		}
	})

    expect(wrapper.text()).toMatch("Vue.js for React developers");
    expect(wrapper.text()).toMatch("Migrating an AngularJS app to Vue.js");

	await wrapper.find('a[href="/tags/angularjs"]').trigger('click');
	await flushPromises();

    expect(wrapper.text()).toMatch("Migrating an AngularJS app to Vue.js");
    expect(wrapper.text()).not.toMatch("Vue.js for React developers");

  })

	
  it('Router renders tag page when a URL is set', async () => {
    
	await router.replace('/');
	await router.push('/tags/angularjs');

	const wrapper = mount(App, {
		global: {
		plugins: [router, createTestingPinia({createSpy:vi.fn})]
		}
	})

    expect(wrapper.text()).toMatch("Migrating an AngularJS app to Vue.js");
    expect(wrapper.text()).not.toMatch("Vue.js for React developers");

  })

})
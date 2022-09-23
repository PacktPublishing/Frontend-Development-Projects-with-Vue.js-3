import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils';
import NewsletterBanner from '../src/components/NewsletterBanner.vue';

import { createTestingPinia } from '@pinia/testing'

import { userPreferencesStore } from '@/store.js';


describe('NewsletterBanner', () => {

  it('Newsletter Banner should display if store is initialized with it not dismissed', () => {
    
    const wrapper = shallowMount(NewsletterBanner, {
		global: {
			plugins: [createTestingPinia({createSpy:vi.fn})]
		}
    })

    expect(wrapper.text()).toMatch("Subscribe to the newsletter");

  })

  it('Newsletter Banner should not display if store is initialised with it dismissed', () => {
    
    const wrapper = shallowMount(NewsletterBanner, {
		global: {
			plugins: [createTestingPinia({
				initialState: {
					userPreferences: {
						dismissedSubscriberBanner: true
					}
				},
				createSpy:vi.fn
			})]
		}
    })

    expect(wrapper.text()).not.toMatch("Subscribe to the newsletter");

  })

  it('Newsletter Banner should hide on "close" button click', async () => {
    
    const wrapper = shallowMount(NewsletterBanner, {
		global: {
			plugins: [createTestingPinia(
				{ createSpy:vi.fn }
			)]
		}
    })

	const store = userPreferencesStore();
	await wrapper.find('button').trigger('click');

	expect(store.dismissSubscriberBanner).toHaveBeenCalledTimes(1);

  })

})

import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils';
import CookieBanner from '../src/components/CookieBanner.vue';

import { createTestingPinia } from '@pinia/testing'
import { userPreferencesStore } from '@/store.js';

describe('CookieBanner', () => {

  it('Cookie Banner should display if store is initialized with it not dismissed', () => {
    
    const wrapper = shallowMount(CookieBanner, {
		global: {
			plugins: [createTestingPinia({createSpy:vi.fn})]
		}
    })

    expect(wrapper.text()).toMatch("Cookies Disclaimer");

  })

  it('Cookie Banner should not display if store is initialised with it dismissed', () => {
    
    const wrapper = shallowMount(CookieBanner, {
		global: {
			plugins: [createTestingPinia({
				initialState: {
					userPreferences: {
						acceptedCookie: true
					}
				},
				createSpy:vi.fn
			})]
		}
    })

    expect(wrapper.text()).not.toMatch("Cookies Disclaimer");

  })  

  it('Cookie Banner should hide on "I agree" button click', async () => {
    
    const wrapper = shallowMount(CookieBanner, {
		global: {
			plugins: [createTestingPinia(
				{ createSpy:vi.fn }
			)]
		}
    })

	const store = userPreferencesStore();
	await wrapper.find('button').trigger('click');

	expect(store.acceptCookie).toHaveBeenCalledTimes(1);

  })
})

import { describe, it, expect } from "vitest";
import MessageFeed from '../MessageFeed.vue'
import { shallowMount } from '@vue/test-utils'

describe("MessageFeed", () => {
    it('renders component', () => {
        const wrapper = shallowMount(MessageFeed, {
           propsData: {
            messages: ['123']
           }
        })
        expect(wrapper.find('p').text()).toBe('123');
    })
})
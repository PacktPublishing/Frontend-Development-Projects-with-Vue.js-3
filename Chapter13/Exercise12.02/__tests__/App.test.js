import { shallowMount } from '@vue/test-utils'
import App from '../src/App.vue'

test('App renders blog title correctly', () => {
  const wrapper = shallowMount(App)
  expect(wrapper.text()).toMatch("The Vue.js Workshop Blog")
})

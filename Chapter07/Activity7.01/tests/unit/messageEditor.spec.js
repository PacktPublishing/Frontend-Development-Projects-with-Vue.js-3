import { shallowMount } from '@vue/test-utils'
import MessageEditor from '@/views/MessageEditor.vue'

describe('MessageList.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MessageEditor, {
       propsData: {
          list: ['123']
       }
    })
    expect(wrapper.find('textarea').isVisible()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Submit');
  })
})
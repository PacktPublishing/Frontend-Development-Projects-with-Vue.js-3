import { mount } from '@vue/test-utils'
import Messages from '@/components/Messages.vue'

describe('Messages.vue', () => {
  it('should render message', () => {
    const messages = [
        'Hello, how are you?',
    ];

    const wrapper = mount(Messages, {
      data() {
        return {
            messages
        }
      },
    })
    
    expect(wrapper.findAll('.message--item').length).toBe(1)
    expect(wrapper.find('.message--item').text()).toBe(messages[0])
  })
})
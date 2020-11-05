import { mount } from '@vue/test-utils'
import MessageEditor from '@/components/MessageEditor.vue'

describe('MessageEditor.vue', () => {
  it('should render message', () => {
    const message = 'hello'
    const wrapper = mount(MessageEditor, {
      data() {
        return {
            message
        }
      },
    })
    
    expect(wrapper.find('.message--display span').text()).toBe(message)
  })
  it('should not render message', () => {
    const msg = 'new message'
    const wrapper = mount(MessageEditor, {
      data() {
        return {
          message: ''
        }
      },
      propsData: { msg }
    })
    
    expect(wrapper.find('.message--display').exists()).toBe(false)
  })
})
import { mount } from '@vue/test-utils'
import Exercise from '@/components/Exercise1-10.vue'
import sinon from 'sinon'

describe('Exercise1-10.vue', () => {
  const wrapper = mount(Exercise)
  
  it('anonymous loop outputs correctly', () => {
      expect(wrapper.findAll('li').length).toEqual(5)
  })
  it('trigger alert', () => {
    const triggerAlertStub = sinon.stub()
    wrapper.setMethods({ triggerAlert: triggerAlertStub })
    wrapper.findAll('li').at(1).trigger('click')
    expect(triggerAlertStub.called).toBe(false)
  })
})


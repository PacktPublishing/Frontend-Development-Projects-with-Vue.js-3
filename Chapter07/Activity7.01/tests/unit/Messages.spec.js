import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import VueRouter from "vue-router"
import { routes } from "@/router/index.js"
import Messages from '@/views/Messages.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("Messages", () => {
  it("renders component", async () => {
    const router = new VueRouter({ routes, mode: 'abstract' })
    const wrapper = mount(Messages, { 
      localVue,
      router, 
    })
    
    expect(wrapper.find("[href='/list']").exists()).toBe(true)
    expect(wrapper.find("[href='/editor']").exists()).toBe(true)
  })
})
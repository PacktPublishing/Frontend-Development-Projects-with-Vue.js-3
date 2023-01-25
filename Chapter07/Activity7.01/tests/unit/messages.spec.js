import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import { routes } from "@/router/index.js"
import Messages from '@/views/Messages.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe("Messages", () => {
  it("renders component", async () => {
    const wrapper = mount(Messages, { global: { plugins: [router] } })
    
    expect(wrapper.find("[href='/list']").exists()).toBe(true)
    expect(wrapper.find("[href='/editor']").exists()).toBe(true)
  })
})
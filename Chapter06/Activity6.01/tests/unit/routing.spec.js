import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import { routes } from "@/router/index.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("renders component", async () => {
    const router = new VueRouter({ routes, mode: 'abstract' })
    const wrapper = mount(App, { 
      localVue,
      router
    })

    expect(wrapper.find("#app").exists()).toBe(true)
  })
})
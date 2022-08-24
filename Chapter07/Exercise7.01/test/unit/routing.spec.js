import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/HomeView.vue"
import { routes } from "@/router/index.js"

const router = createRouter({
  history: createWebHistory(),
  routes
})
describe("App", () => {
  it("renders Home component for default route via routing", async () => {
    const wrapper = mount(App, { 
      global: {
        plugins: [router]
      }
    })

    router.push("/")
    await wrapper.vm.$nextTick()

    console.log(wrapper.html())
    expect(wrapper.find('main').exists()).toBe(true)
  })
})
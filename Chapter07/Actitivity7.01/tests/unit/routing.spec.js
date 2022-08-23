import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import {createRouter, createWebHistory} from "vue-router"
import { routes } from "@/router/index.js"

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe("App", () => {
  it("renders component", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    console.log(wrapper.html())
    expect(wrapper.find(".default").exists()).toBe(true)
  })
})
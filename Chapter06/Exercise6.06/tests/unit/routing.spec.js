import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import { routes } from "@/router/index.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("renders Home component for default route via routing", async () => {
    const router = new VueRouter({ routes, mode: 'abstract' })
    const wrapper = mount(App, { 
      localVue,
      router
    })

    router.push("/")
    await wrapper.vm.$nextTick()

    expect(wrapper.find(Home).exists()).toBe(true)
  })

  it("renders route link with active Home", async () => {
    const router = new VueRouter({ routes, mode: 'abstract' })
    const wrapper = mount(App, { 
      localVue,
      router
    })

    router.push("/")
    await wrapper.vm.$nextTick()

    expect(wrapper.find("[href='/']").exists()).toBe(true)
    expect(wrapper.find("[href='/']").classes('router-link-exact-active')).toBe(true)
  })

  it("renders route link to /about", async () => {
    const router = new VueRouter({ routes, mode: 'abstract' })
    const wrapper = mount(App, { 
      localVue,
      router
    })

    router.push("/about")
    await wrapper.vm.$nextTick()

    expect(wrapper.find("[href='/about']").exists()).toBe(true)
  })

  it("renders route link to /messages", async () => {
    const router = new VueRouter({ routes, mode: 'abstract' })
    const wrapper = mount(App, { 
      localVue,
      router
    })

    router.push("/messages")
    await wrapper.vm.$nextTick()

    expect(wrapper.find("[href='/messages']").exists()).toBe(true)
  })
})
import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders name', () => {
    const name = 'John Doe'
    const { vm } = mount(App)

    expect(vm.authors).toStrictEqual([])
    vm.authors = [
      {
        fields: {
          name,
        },
      },
    ]

    expect(vm.name).toBe(name)
  })
  it('fetch authors', async () => {
    const { vm } = mount(App)
    expect(vm.authors).toStrictEqual([])

    const people = await vm.getPeople()
    vm.authors = people
    expect(vm.title).toBe(people[0].fields.title)
  })
  it('renders bio', () => {
    const bio = 'From Melbourne'
    const { vm } = shallowMount(App)

    expect(vm.authors).toStrictEqual([])
    vm.authors = [
      {
        fields: {
          shortBio: bio,
        },
      },
    ]

    expect(vm.bio).toBe(bio)
  })

  it('fetch blog posts', async () => {
    const { vm } = mount(App)

    const posts = await vm.getBlogPosts()
    vm.posts = posts
    expect(vm.posts).toBe(posts)
  })
})

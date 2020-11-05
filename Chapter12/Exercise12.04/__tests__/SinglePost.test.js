import {render, fireEvent} from '@testing-library/vue'
import App from '../src/App.vue'
import router from '../src/router.js'

test('Router renders single post page when clicking a post title', async () => {
  const {getByText, queryByText} = render(App, { router })
  expect(queryByText('The Vue.js Workshop Blog')).toBeTruthy()
  expect(queryByText('Vue.js for React developers')).toBeTruthy()
  expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeTruthy()

  await fireEvent.click(getByText('Vue.js for React developers'))
  expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeFalsy()
  expect(queryByText('Post: Vue.js for React developers')).toBeTruthy()
  expect(
    queryByText(
      `React has massive popularity here are the key benefits of Vue.js over it. See the following table, we'll also look at how the is the content of the post. There's more, we can map React concepts to Vue and vice-versa.`
    )
  ).toBeTruthy()
})

test('Router renders single post page when a slug is set', async () => {
  const {queryByText} = render(App, { router })
  await router.replace('/')
  await router.push('/vue-react')
  expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeFalsy()
  expect(queryByText('Post: Vue.js for React developers')).toBeTruthy()
  expect(
    queryByText(
      `React has massive popularity here are the key benefits of Vue.js over it. See the following table, we'll also look at how the is the content of the post. There's more, we can map React concepts to Vue and vice-versa.`
    )
  ).toBeTruthy()
})

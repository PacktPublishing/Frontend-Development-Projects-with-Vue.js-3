import {render, fireEvent} from '@testing-library/vue'
import App from '../src/App.vue'
import router from '../src/router.js'

test('Router renders tag page when clicking a tag in the post list item', async () => {
  const {getByText, queryByText} = render(App, { router })
  expect(queryByText('The Vue.js Workshop Blog')).toBeTruthy()
  expect(queryByText('Vue.js for React developers')).toBeTruthy()
  expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeTruthy()

  await fireEvent.click(getByText('#angularjs'))
  expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeTruthy()
  expect(queryByText('Vue.js for React developers')).toBeFalsy()
  expect(queryByText('React')).toBeFalsy()
})

test('Router renders tag page when a URL is set', async () => {
  const {queryByText} = render(App, { router })
  await router.push('/')
  await router.replace('/tags/angularjs')
  expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeTruthy()
  expect(queryByText('Vue.js for React developers')).toBeFalsy()
  expect(queryByText('React')).toBeFalsy()
})

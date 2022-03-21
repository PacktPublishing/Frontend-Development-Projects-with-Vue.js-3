import {render, fireEvent} from '@testing-library/vue'
import SearchForm from '../src/components/SearchForm.vue'
import App from '../src/App.vue'
import router from '../src/router'
import store from '../src/store'

test('SearchForm should match expected HTML', () => {
  const {html} = render(SearchForm, {
    router,
    store
  })
  expect(html()).toMatchSnapshot()
})

test('SearchForm filter by keyword on submission', async () => {
  const {getByPlaceholderText, getByText, queryByText} = render(App, {
    router,
    store
  })
  expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeTruthy()
  expect(queryByText('Vue.js for React developers')).toBeTruthy()
  await fireEvent.update(getByPlaceholderText('Search'), 'react')
  await fireEvent.click(getByText('Search'))
  expect(queryByText('Vue.js for React developers')).toBeTruthy()
  expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeFalsy()
})

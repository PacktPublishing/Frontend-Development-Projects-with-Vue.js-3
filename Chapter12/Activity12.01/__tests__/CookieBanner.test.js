import {render, fireEvent} from '@testing-library/vue'
import CookieBanner from '../src/components/CookieBanner.vue'
import store from '../src/store'

test('Cookie Banner should display if store is initialised with it not dismissed', () => {
  const {queryByText} = render(CookieBanner, { store })
  expect(queryByText('Cookies Disclaimer')).toBeTruthy()
})

test('Cookie Banner should not display if store is initialised with it dismissed', () => {
  const {queryByText} = render(CookieBanner, { store: {
    state: {
      acceptedCookie: true
    }
  } })
  expect(queryByText('Cookies Disclaimer')).toBeFalsy()
})

test('Cookie Banner should hide on "I agree" button click', async () => {
  const acceptCookie = jest.fn()
  const {getByText} = render(CookieBanner, {
    store: {
      ...store,
      mutations: {
        acceptCookie
      }
    }
  })
  await fireEvent.click(getByText('I agree'))
  expect(acceptCookie).toHaveBeenCalledTimes(1)
})

import {render, fireEvent} from '@testing-library/vue'
import NewsletterBanner from '../src/components/NewsletterBanner.vue'
import store from '../src/store'

test('Newsletter Banner should display if store is initialised with it not dismissed', () => {
  const {queryByText} = render(NewsletterBanner, { store })
  expect(queryByText('Subscribe to the newsletter')).toBeTruthy()
})

test('Newsletter Banner should not display if store is initialised with it dismissed', () => {
  const {queryByText} = render(NewsletterBanner, { store: {
    state: {
      dismissedSubscribeBanner: true
    }
  } })
  expect(queryByText('Subscribe to the newsletter')).toBeFalsy()
})

test('Newsletter Banner should hide on "close" button click', async () => {
  const dismissSubscribeBanner = jest.fn()
  const {getByText} = render(NewsletterBanner, {
    store: {
      ...store,
      mutations: {
        dismissSubscribeBanner
      }
    }
  })
  await fireEvent.click(getByText('Close'))
  expect(dismissSubscribeBanner).toHaveBeenCalledTimes(1)
})

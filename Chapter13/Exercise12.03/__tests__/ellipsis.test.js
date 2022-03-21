import PostListItem from '../src/components/PostListItem.vue'

test('ellipsis should do nothing if value is less than 50 characters', () => {
  expect(
    PostListItem.filters.ellipsis('Less than 50 characters')
  ).toEqual('Less than 50 characters')
})

test('ellipsis should truncate to 50 and append "..." when longer than 50 characters', () => {
  expect(
    PostListItem.filters.ellipsis(
      'Should be more than the 50 allowed characters by a small amount'
    )
  ).toEqual('Should be more than the 50 allowed characters by a...')
})

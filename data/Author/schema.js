import Post from '../Post/schema'

const Author = `
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}
`

export default () => [Post, Author]

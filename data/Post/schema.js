import Author from '../Author/schema'

const Post = `
type Post {
  id: Int!
  title: String
  votes: Int
  author: Author
}

type Query {
  posts: [Post]
  authors: [Author]
}

type Mutation {
  upvotePost (
    postId: Int!
  ): Post
}

type Subscription {
  postUpvoted: Post
}
`

export default () => [Post, Author]

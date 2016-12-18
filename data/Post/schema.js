export default `
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

type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}
`

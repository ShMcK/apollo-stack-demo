const Post = `
type Post {
  id: Int!
  title: String
  votes: Int
  author: Author
}

type Query {
  posts: [Post]
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

export default Post
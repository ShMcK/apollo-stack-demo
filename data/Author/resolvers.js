// TODO: replace with db
import posts from '../Post/data'

export default {
  Author: {
    posts: (author) => posts.filter(p => p.authorId === author.id)
  },
}

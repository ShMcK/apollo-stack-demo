const posts = [{
  id: 1, title: 'First Post', votes: 5,
}, {
  id: 2, title: 'Second Post', votes: 3,
}, {
  id: 3, title: 'Third Post', votes: 4,
}]

const resolveFunctions = {
  Query: {
    posts() {
      return posts
    }
  }
}

export default resolveFunctions

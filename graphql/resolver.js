import { getMovieById, getAllMovies, createMovie, deleteMovie } from "./db"

// Query 를 처리(resolve)하는 역할. JS.
const resolvers = {
  // Query 에 대한 처리를 정의. 각 필드에 대해 함수를 정할 수 있음. DB를 거치던, API 호출을 하던.
  // schema.graphql 에서 mongoose schema 처럼 미리 schema 를 정한다.
  Query: {
    movie: (_, { id }) => getMovieById(id),
    movies: () => getAllMovies(),
  },
  Mutation: {
    createMovie: (_, { name, score }) => createMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  }
}

export default resolvers
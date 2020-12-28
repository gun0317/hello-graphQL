let movies = [
  {
    id: 0,
    name: 'Jurassic Park 1',
    score: 100,
  },
  {
    id: 1,
    name: 'The Avengers',
    score: 95,
  },
  {
    id: 2,
    name: 'Captain America',
    score: 90,
  }
]

export const getAllMovies = () => movies

export const getMovieById = id => {
  const targetIndex = movies.findIndex(movie => id === +movie.id)
  return movies[targetIndex]
}

export const deleteMovie = id => {
  const targetMovie = getMovieById(id)
  if (targetMovie) {
    movies = movies.filter(movie => movie.id !== id)
    return true
  }
  return false
}

export const createMovie = (name, score) => {
  const newMovie = getMovieObject(movies[movies.length - 1].id + 1, name, score)
  movies.push(newMovie)

  return newMovie
}

export const updateMovie = (id, newName, newScore) => {
  const targetMovie = getMovieById(id)
  if (targetMovie && deleteMovie(id)) {
    const newMovie = getMovieObject(id, newName || targetMovie.name, newScore || targetMovie.score)
    movies.splice(id, 0, newMovie)
    return true
  }
  return false
}

const getMovieObject = (id, name, score) => {
  return {
    id,
    name,
    score,
  }
}
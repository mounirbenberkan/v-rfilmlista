import Movie from '../Movie/Movie'
import './MovieList.css'

type MovieType = {
    id: number
    title: string
    grade: number
}

type Props = {
    movies: MovieType[]
    onRemoveMovie: (id: number) => void
}

const MovieList = ({ movies, onRemoveMovie }: Props) => {
    return (
        <ul className="movie-list">
            {movies.map(movie => <Movie key={movie.id} movie={movie} onRemoveMovie={onRemoveMovie} />)}
        </ul>
    )
}

export default MovieList

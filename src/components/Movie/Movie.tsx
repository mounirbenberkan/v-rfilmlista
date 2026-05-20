import './Movie.css'

type MovieType = {
    id: number
    title: string
    grade: number
}

type Props = {
    movie: MovieType
    onRemoveMovie: (id: number) => void
}

const Movie = ({ movie, onRemoveMovie }: Props) => {
    return (
        <li className="movie">
            <span className="movie-title">{movie.title}</span>
            <span className="movie-stars">{'★'.repeat(movie.grade)}</span>
            <button className="movie-remove" onClick={() => onRemoveMovie(movie.id)}>✕</button>
        </li>
    )
}

export default Movie

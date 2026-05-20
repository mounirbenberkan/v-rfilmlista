import { useState } from 'react'
import AddMovieForm from './components/AddMovieForm/AddMovieForm'
import MovieList from './components/MovieList/MovieList'
import './App.css'

type Movie = {
    id: number
    title: string
    grade: number
}

const App = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const addMovie = (title: string, grade: number) => {
        const newMovie: Movie = { id: Date.now(), title, grade }
        setMovies([...movies, newMovie])
    }

    const removeMovie = (id: number) => {
        setMovies(movies.filter(movie => movie.id !== id))
    }

    const sortByTitle = () => {
        setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)))
    }

    const sortByGrade = () => {
        setMovies([...movies].sort((a, b) => b.grade - a.grade))
    }

    return (
        <main className="app">
            <h1>Min filmlista</h1>
            <AddMovieForm onAddMovie={addMovie} />
            <div className="sort-buttons">
                <button onClick={sortByTitle}>Sortera A-Ö</button>
                <button onClick={sortByGrade}>Sortera efter betyg</button>
            </div>
            <MovieList movies={movies} onRemoveMovie={removeMovie} />
        </main>
    )
}

export default App

import { useState } from 'react'
import './AddMovieForm.css'

type Props = {
    onAddMovie: (title: string, grade: number) => void
}

const AddMovieForm = ({ onAddMovie }: Props) => {
    const [title, setTitle] = useState('')
    const [grade, setGrade] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title.trim() || !grade) {
            alert('Du måste ange både titel och betyg!')
            return
        }
        onAddMovie(title.trim(), Number(grade))
        setTitle('')
        setGrade('')
    }

    return (
        <form className="add-movie-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Filmtitel"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <select value={grade} onChange={e => setGrade(e.target.value)}>
                <option value="">Välj betyg</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">Lägg till film</button>
        </form>
    )
}

export default AddMovieForm

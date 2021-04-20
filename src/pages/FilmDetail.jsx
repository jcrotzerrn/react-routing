import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmDetail = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film));
    }, []);
    
    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h2>{film?.title}</h2>
                    <p>{film?.description}</p>
                    <hr></hr>
                    <p>Director: {film?.director}</p>
                    <Link to="/films" className="btn btn-secondary">Go Back</Link>
                </div>
            </section>
        </main>
    );
}

export default FilmDetail;
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const PeopleDetail = () => {
    const { peopleid } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
            .then(res => res.json())
            .then(person => setPerson(person));
    }, []);
    
    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h2>{person?.name}</h2>
                <p>Gender: {person?.gender}</p>
                    <hr></hr>
                    <p>Eye Color: {person?.eye_color}</p>
                    <Link to="/people" className="btn btn-secondary">Go Back</Link>
                </div>
            </section>
        </main>
    );
}

export default PeopleDetail;
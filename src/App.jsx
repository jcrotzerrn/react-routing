import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetail from './pages/FilmDetail';
import People from './pages/People';
import PeopleDetail from './pages/PeopleDetail';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="container mt-5">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmid">
                        <FilmDetail />
                    </Route>
                    <Route exact path="/people">
                        <People />
                    </Route>
                    <Route exact path="/people/:peopleid">
                        <PeopleDetail />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
};

export default App;
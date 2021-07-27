import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Detail from './pages/Detail';
import MainPage from './pages/Main';

Movie.propTypes = {};

function Movie(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route path={`${match.url}/page/:page`} component={MainPage} />
            <Route path={`${match.url}/:slug`} component={Detail} />
        </Switch>
    );
}

export default Movie;
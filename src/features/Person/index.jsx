import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './page/Main';

function Person(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.url}/:slug`} component={MainPage} />
        </Switch>
    );
}

export default Person;
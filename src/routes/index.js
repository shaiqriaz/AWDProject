import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Containers
import HomeLayout from '../containers/homeContainer';
// Pages
import Home from '../pages/Home';

const renderRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={props => <AppRoute Layout={HomeLayout} Component={Home} props={props} />} />
                </Switch>
            </div>
        </Router>
    );
};

const AppRoute = ({ Component, Layout, props }) => {
    if (Layout) {
        return (
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        );
    }

    if (!Component) {
        return <Layout {...props} />;
    }

    return <Component {...props} />;
};

export default renderRoutes;

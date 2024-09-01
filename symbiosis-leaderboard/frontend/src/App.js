import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import Leaderboard from './pages/Leaderboard';
import LoginPage from './pages/Login';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import './styles/App.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute path="/profile" component={Profile} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
import React from 'react'
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Navbar/>
                </div>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Redirect to='/' />
                </Switch>


            </Router>
        </div>
    )
}

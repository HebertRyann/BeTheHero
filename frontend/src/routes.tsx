import React from 'react'
import { Switch } from 'react-router-dom';
import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import NewIncident from './Pages/NewIncident';
import { CustomRoute } from './components/Route';

export default function Routes(){ 
    return (
        <Switch>
            <CustomRoute path="/" exact component={Logon} />
            <CustomRoute path="/register" component={Register} />
            <CustomRoute path="/profile" component={Profile} privateRoute />
            <CustomRoute path="/incidents/new" component={NewIncident} privateRoute />
        </Switch>
    )
}
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import HomePage from '../HomePage'
import RegisterPage from '../RegisterPage'

function App(){
    return (
        <Router>
            <Switch>

                <Route path='/' exact component={HomePage}/>
                <Route path='/RegisterPage' component={RegisterPage}/>

            </Switch>
        </Router>
    )
}

export default App
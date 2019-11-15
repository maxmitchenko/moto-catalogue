import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MotosList, MotosInsert, MotosUpdate } from '../pages'
import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/motos/list" exact component={MotosList} />
                <Route path="/motos/create" exact component={MotosInsert} />
                <Route
                    path="/motos/update/:id"
                    exact
                    component={MotosUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BooksList, BooksInsert, BooksUpdate, WelcomePage } from '../pages'
import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={WelcomePage} />
                <Route path="/books/list" exact component={BooksList} />
                <Route path="/books/create" exact component={BooksInsert} />
                <Route
                    path="/books/update/:id"
                    exact
                    component={BooksUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
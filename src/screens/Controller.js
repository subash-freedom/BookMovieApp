import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./home/Home"
import BookShow from "./bookshow/BookShow"
import Confirmation from "./confirmation/Confirmation"
import Details from "./details/Details"
import moviesData from '../common/movieList'
const Controller = () => {
        return ( < Router >
                < Switch >
                < Route exact path = "/"
                render = {
                    props => < Home {...props }
                    />} / >
                    < Route
                    path = "/details/:id"
                    component = {
                        ({ match }) => ( <
                            Details match = { match }
                            movies = { moviesData }
                            />
                        )
                    }
                    /> < Route path = "/bookshow/:id"
                    render = {
                        props => < BookShow {...props }
                        />}/ >
                        < Route path = "/confirm/:id"
                        render = {
                            props => < Confirmation {...props }
                            />}/ >
                            <
                            /Switch>
                            < /Router >
                        )
                    }

                    export default Controller

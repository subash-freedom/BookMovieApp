import React from "react";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";


const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,
        flexWrap: "nowrap",
    },
}));

export default function UpcomingMovies({ movies }) {
    const classes = useStyles();
    return ( <
        div >
        <
        GridList className = { classes.root }
        style = {
            { margin: 0 }
        }
        cols = { 6 }
        cellHeight = { 250 } > {
            movies.map(movie => ( <
                GridListTile key = { movie.id } >
                <
                img src = { movie.poster_url }
                alt = { movie.title }
                /> <
                GridListTileBar title = { movie.title }
                /> < /
                GridListTile >
            ))
        } <
        /GridList> < /
        div >
    );
}
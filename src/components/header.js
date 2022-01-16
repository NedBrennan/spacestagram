import React from 'react'
import { Typography, Card, Toolbar, makeStyles } from '@material-ui/core'

const style = makeStyles({
    toolbar: {
        background: "#333",
        padding: "10px 30px",
        display: "flex",
        justifyContent: 'flex-end'
    },
    menuItem: {
        color: "white",
        padding: "5px 30px"
    }
})

export default function header() {
    const classes = style()
    return (
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.menuItem}>Home</Typography>
            <Typography className={classes.menuItem}>About</Typography>
            <Typography className={classes.menuItem}>Login</Typography>
        </Toolbar>
    )
}

import React from 'react'
import PhotoCard from './photoCard'
import { Grid, Typography, makeStyles } from '@material-ui/core'

const style = makeStyles({
    gridContainer: {
        padding: "50px 70px"
    }
})

export default function CardContainer() {
    
    const classes = style()
    
    return (
        <Grid className={classes.gridContainer} container spacing={4}>
            <Grid item md={4}>
                <PhotoCard /> 
            </Grid>   
        </Grid>
    )
}

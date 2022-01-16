import React, { useState } from 'react'
import PhotoCard from './photoCard'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import axios from 'axios'
import cors from 'cors'

const style = makeStyles({
    gridContainer: {
        padding: "50px 70px"
    }
})

export default function CardContainer() {

    const [images, setImages] = useState([])

    async function getImages() {

        const params = {
            start_date: "2022-01-01",
            end_date: "2022-01-15"
        }

        const headers = {
            'Access-Control-Allow-Headers': "Origin",
            'Access-Control-Allow-Origin': '*'
        }

        const { data } = await axios.get(`http://localhost:3000/api/nasa/range`,
            {
                headers: headers,
                params: params
            }
        )

        setImages(data)
        console.log(data)
        localStorage.setItem(images, JSON.stringify(data))
    }


    if (images.length == 0) {
        let localMemory = localStorage.getItem(images)

        if(localMemory) {
            localMemory = JSON.parse(localMemory)
            setImages(localMemory)
        } else {
            getImages()
        }
    }


    const classes = style()

    return (
        <Grid className={classes.gridContainer} container spacing={4}>
        {images.length > 0 ? images.map((card, index) => (
            <Grid key={index} item md={4}>
                <PhotoCard data={card}/>
            </Grid>
        )) : <h1>Loading</h1>}
        </Grid>
    )
}

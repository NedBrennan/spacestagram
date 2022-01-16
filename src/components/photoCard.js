import React from 'react'
import { Card, CardContent, CardMedia, Typography, makeStyles, CardActionArea, Button } from '@material-ui/core'
import spacePhoto from '../test-space.jpg'
import getSpacePhoto from '../hooks/getSpacePhoto'
import { useState, useEffect } from 'react'
import axios from 'axios'

const style = makeStyles({
    spacePhoto: {
        width: "100%",
        height: 'auto'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})

export default function photoCard(props) {

    const [image, setImage] = React.useState(spacePhoto);
    const [title, setTitle] = React.useState("Test title")
  
    async function getImage(url) {

        const headers = {
            'Access-Control-Allow-Origin': '*'
        }

        const { data } = await axios.get(`${url}/2022-01-07`, headers)
        console.log(data)

        setImage(data.url)
        setTitle(data.title)
    }
    
    const classes = style()
    
    return (
        <Card>
            <CardMedia>
                <img className={classes.spacePhoto} src={image} />
            </CardMedia>
            <CardContent className={classes.textContainer}>
                <Typography variant="h4">{title}</Typography>
                <Typography></Typography>
                <Typography variant="body1">Mauris turpis urna, aliquet sed risus sit amet, scelerisque convallis quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel tellus eu purus vehicula iaculis. Morbi augue augue, pellentesque id lacus vel, rhoncus commodo leo. Nam aliquet, lectus quis vehicula suscipit, nibh purus fermentum quam, in sodales ligula mauris et dui. Donec vel elit velit. Pellentesque vel nibh vitae nisl elementum laoreet et eget magna. Cras luctus erat id pharetra dictum. Maecenas pharetra, ligula a accumsan posuere, nibh dui convallis nulla, a mattis enim turpis vitae nisi. Phasellus non enim nulla.</Typography>
            </CardContent>
            <Button onClick={() => getImage('http://localhost:3000/api/nasa')}>Hello</Button>
        </Card>
    )
}

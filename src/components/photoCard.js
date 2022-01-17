import React from 'react'
import { Card, CardContent, CardMedia, Typography, makeStyles, CardActionArea, Button } from '@material-ui/core'
import spacePhoto from '../test-space.jpg'
import getSpacePhoto from '../hooks/getSpacePhoto'
import { useState, useEffect } from 'react'
import axios from 'axios'
import heartActive from '../heart-liked.png'
import heartInactive from '../heart.png'

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
    },
    like: {
        height: "40px",
        width: "40px"
    }
})

export default function photoCard(props) {

    const {url, title} = props.data

    let heart = JSON.parse(localStorage.getItem(props.data.date))

    let [like, setLike] = useState(heart ? heartActive : heartInactive)

    async function likeImage(event) {

        console.log(event.target)

        if(like == heartActive) {
            setLike(heartInactive)
            localStorage.setItem(props.data.date, false)
        } else {
            setLike(heartActive)
            localStorage.setItem(props.data.date, true)
        }
    }
    
    const classes = style()
    
    return (
        <Card>
            <CardMedia>
                <img className={classes.spacePhoto} src={url} />
            </CardMedia>
            <Button onClick={(event) => likeImage(event)}>
                <img className={classes.like} src={heart ? heartActive : like} />
            </Button>
            <CardContent className={classes.textContainer}>
                <Typography variant="h4">{title}</Typography>
                <Typography></Typography>
                <Typography variant="body1">Mauris turpis urna, aliquet sed risus sit amet, scelerisque convallis quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel tellus eu purus vehicula iaculis. Morbi augue augue, pellentesque id lacus vel, rhoncus commodo leo. Nam aliquet, lectus quis vehicula suscipit, nibh purus fermentum quam, in sodales ligula mauris et dui. Donec vel elit velit. Pellentesque vel nibh vitae nisl elementum laoreet et eget magna. Cras luctus erat id pharetra dictum. Maecenas pharetra, ligula a accumsan posuere, nibh dui convallis nulla, a mattis enim turpis vitae nisi. Phasellus non enim nulla.</Typography>
            </CardContent>
        </Card>
    )
}

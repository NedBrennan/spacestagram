import React from 'react'
import { Card, CardContent, CardMedia, Typography, makeStyles, CardActionArea, Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import spacePhoto from '../test-space.jpg'
import getSpacePhoto from '../hooks/getSpacePhoto'
import { useState, useEffect } from 'react'
import axios from 'axios'
import heartActive from '../heart-liked.png'
import heartInactive from '../heart.png'
import twitter from '../twitter.png'

const style = makeStyles({
    card: {
        background: "#333",
        borderRadius: "15px"
    },
    spacePhoto: {
        width: "100%",
        height: 'auto'

    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    like: {
        height: "40px",
        width: "40px"
    },
    primaryText: {
        color: "#fafafa",
    },
    title: {
        padding: "10px 15px",
        color: "#fafafa"
    },
    descriptionContainer: {
        boxShadow: 'none',
        background: "#333",
        position: 'initial',
    },
    descriptionText: {
        padding: "0px 5px",
        textAlign: 'justify',
        color: 'white'
    },
    descriptionButton: {
        padding: "0px 20px"
    },
    iconContainer: {
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "25%"
    }
})

export default function photoCard(props) {

    const { url, title } = props.data

    let heart = JSON.parse(localStorage.getItem(props.data.date))

    let [like, setLike] = useState(heart ? heartActive : heartInactive)

    async function likeImage(event) {

        console.log(event.target)

        if (like == heartActive) {
            setLike(heartInactive)
            localStorage.setItem(props.data.date, false)
        } else {
            setLike(heartActive)
            localStorage.setItem(props.data.date, true)
        }
    }

    const classes = style()

    return (
        <Card className={classes.card}>
            <CardMedia>
                <img className={classes.spacePhoto} src={url} />
            </CardMedia>
            <CardContent className={classes.textContainer}>
                <div className={classes.iconContainer}>
                    <Button onClick={(event) => likeImage(event)}>
                        <img className={classes.like} src={heart ? heartActive : like} />
                    </Button>
                    <a href={`https://twitter.com/share?url=${props.data.url}&text=Check%20this%20out!&via=nasa`}>
                        <img className={classes.like} src={twitter} />
                    </a>
                </div>
                <Typography className={classes.primaryText, classes.title} variant="h4">{title}</Typography>
                <Typography className={classes.primaryText}></Typography>
                <Accordion className={classes.descriptionContainer}>
                    <AccordionSummary
                        className={classes.descriptionButton}
                    // expandIcon={<ExpandMoreIcon />}
                    // aria-controls="panel1a-content"
                    // id="panel1a-header"
                    >
                        <Typography className={classes.primaryText} variant="h6">Read more</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.descriptionText} variant="body1">
                            {props.data.explanation}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
    )
}

import React from 'react'
import { makeStyles } from '@mui/styles'
import { Avatar, Typography } from '@mui/material'

const useStyles = makeStyles({
    card: {
        background: "transparent",
        "&:hover": { backgroundColor: 'white', color: 'black' },
        borderRadius: 20,
        color: 'white',
        textAlign: 'center',
        padding: 12,
        maxWidth: 300,
        margin: 'auto',
        paddingTop: 24,
        paddingBottom: 48,
        transition:'0.35s ease'
    }
})

function Card({ img, title, desc }) {
    const classes = useStyles()
    return (
        <div className={classes.card}>
            <Avatar src={img} sx={{ m: 'auto', mb: 5, height: { xs: 40, md: 70 }, width: { xs: 40, md: 70 } }} />
            <Typography variant="h6" color="inherit">{title}</Typography>
            <Typography variant="subtitle2" color="inherit">{desc}</Typography>
        </div>
    )
}

export default Card
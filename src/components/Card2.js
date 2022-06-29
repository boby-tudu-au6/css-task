import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import theme from 'theme'

const useStyles = makeStyles({
    card: {
        background: "transparent",
        borderRadius: 20,
        textAlign: 'center',
        padding: 12,
        maxWidth: 400,
        paddingTop: 24,
        paddingBottom: 48,
        color: '#2B2B2B',
        marginBottom: 100,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
            paddingBottom: 0
        },
    }
})

function Card({ img, title, desc }) {
    const classes = useStyles()
    return (
        <div className={classes.card}>
            <img src={img} style={{ width: 120, height: 120, marginBottom: 12 }} />
            <Typography variant="h6" color="inherit" sx={{ fontWeight: 700, fontSize: 16, mb: 3 }}>{title}</Typography>
            <Typography variant="subtitle2" color="inherit">{desc}</Typography>
        </div>
    )
}

export default Card
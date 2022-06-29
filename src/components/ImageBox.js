import React from 'react'
import { ChevronRight } from '@mui/icons-material'
import { styled, Box, Typography, Divider, Button } from '@mui/material'

const StyledImageBox = styled(Box)(({ theme }) => ({
    width: '100%',
    m: 'auto',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overflow: 'hidden',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "flex-end",
    minHeight: 300,
    height:'100%',
    [theme.breakpoints.down('sm')]:{
        height:'auto'
    }
}));

const StyledBox = styled(Box)(({ theme }) => ({
    width: 'calc(100% - 48px)',
    padding: 24,
    height: '30%',
    color: "white",
    transition: "0.4s ease",
}))

function ImageBox({ img, title, desc, small, bg }) {
    return (
        <StyledImageBox sx={{ backgroundImage: `url(${img})` }}>
            <StyledBox sx={{ background: bg, "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" } }}>
                <Typography
                    variant="h5"
                    sx={{ fontSize: { xs: 16, md: small ? 16 : 26 }, fontWeight: 700 }}>{title}</Typography>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: { xs: 12, md: small ? 12 : 18 } }}>{desc}</Typography>
                <Divider sx={{
                    mt: small ? 2 : 4,
                    mb: small ? 2 : 4,
                    background: small ? '#616161' : "white",
                    width: '100%'
                }} />
                <Button
                    variant={small ? 'text' : "outlined"}
                    sx={{ borderRadius: 4, borderColor: "white", color: small ? 'black' : "white" }}
                    endIcon={<ChevronRight />}>
                    Explore
                </Button>
            </StyledBox>
        </StyledImageBox>
    )
}

export default ImageBox
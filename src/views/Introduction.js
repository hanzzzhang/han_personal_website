import React from 'react'
import { Box, Typography } from '@mui/material'

const Introduction = () => {
    return (
        <Box sx={{ height: '100vh' }}>
            <div>
                <img
                    style={{
                        borderRadius: '50%',
                        width: '150px',
                        paddingTop: '25px',
                        paddingBottom: '25px',
                    }}
                    src="han_zhang.jpeg"
                    alt="han zhang"
                ></img>
                <Typography
                    id="hello"
                    variant="h4"
                    sx={{
                        fontFamily: 'Helvetica, sans-serif',
                        fontWeight: 'bold',
                        paddingTop: '25px',
                        paddingBottom: '25px',
                    }}
                >
                    Hello!
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'left',
                    }}
                >
                    Coming Soon.
                </Typography>
            </div>
        </Box>
    )
}

export default Introduction

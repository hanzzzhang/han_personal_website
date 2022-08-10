import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Divider, Typography } from '@mui/material'

export default function Header() {
    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
    }
    return (
        <Box>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0',
                    padding: '20px',
                }}
            >
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <a style={linkStyle} href="/">
                                <Typography variant="h5" align="left">
                                    Han Zhang
                                </Typography>
                            </a>
                            <Typography
                                variant="subtitle1"
                                color={'#666'}
                                align="left"
                            >
                                Han but Online
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '25px',
                            }}
                        >
                            <a style={linkStyle} href="/experience">
                                <Typography>Experience</Typography>
                            </a>
                            <a style={linkStyle} href="/projects">
                                <Typography>Projects</Typography>
                            </a>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Divider variant="fullwidth" />
        </Box>
    )
}

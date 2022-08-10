import React from 'react'
import { Typography } from '@mui/material'

const Projects = () => {
    return (
        <div
            id="projects"
            className="projects"
            style={{
                height: '100vh',
                position: 'relative',
            }}
        >
            <div style={{}}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Helvetica',
                        margin: '1em 0 1em',
                        fontWeight: 'bold',
                    }}
                >
                    Projects
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
        </div>
    )
}

export default Projects

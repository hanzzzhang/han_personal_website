import React from 'react'
import { Typography } from '@mui/material'
import Timeline from '../components/ExperienceTimeline'
import Box from '@mui/material/Box'

const Experience = () => {
    return (
        <div
            className="homepage"
            style={{
                height: '100vh',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    justifyContent: 'center',
                    top: '70%',
                    transform: 'translateY(-50%)',
                }}
            ></div>
            <div>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Helvetica',
                        margin: '1em 0 1em',
                        fontWeight: 'bold',
                    }}
                >
                    Experience
                </Typography>
                <Box sx={{ alignContent: 'center' }}>
                    <Timeline></Timeline>
                </Box>
            </div>
            <Typography variant="body1" sx={{ margin: '25px' }}>
                Want to see more? Click&nbsp;
                <a
                    href="https://drive.google.com/file/d/1enQHWRDu-PpfhospbPzc4N4ZYi0Ks9jg/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
                &nbsp;to see my resume.
            </Typography>
        </div>
    )
}

export default Experience

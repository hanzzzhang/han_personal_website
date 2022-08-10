import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import { TimelineOppositeContent } from '@mui/lab'

export default function ExperienceTimeline() {
    return (
        <Timeline
            sx={{
                maxWidth: '375px',
                border: '0',
                margin: '0 auto',
                padding: '0',
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent display="none"></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
                    >
                        <a
                            href="https://www.mochidoyvr.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="mochido.png"
                                alt="mochido"
                                width="64px"
                            ></img>
                        </a>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Mochido - Kitchen Manager
                    </Typography>
                    <Typography
                        sx={{ m: 'auto 0' }}
                        align="left"
                        variant="body2"
                        color="text.secondary"
                    >
                        January 2022 - Present
                        <ul>
                            <li>made donuts</li>
                            <li>for free</li>
                            <li>and gave them out</li>
                        </ul>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent display="none"></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            backgroundColor: 'white',
                            boxShadow: 'none',
                        }}
                    >
                        <a
                            href="https://www.mcdonalds.com/ca/en-ca.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="mcdonalds.jpg"
                                alt="mcdonalds"
                                width="64px"
                            ></img>
                        </a>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        McDonald's - Crew Member
                    </Typography>
                    <Typography
                        sx={{ m: 'auto 0' }}
                        align="left"
                        variant="body2"
                        color="text.secondary"
                    >
                        September 2021 - January 2022
                        <ul>
                            <li>made donuts</li>
                            <li>for free</li>
                            <li>and gave them out</li>
                        </ul>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent display="none"></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
                    >
                        <a
                            href="https://www.starbucks.cas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="starbucks.png"
                                alt="starbucks"
                                width="64px"
                            ></img>
                        </a>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Starbucks - Barista
                    </Typography>
                    <Typography
                        sx={{ m: 'auto 0' }}
                        align="left"
                        variant="body2"
                        color="text.secondary"
                    >
                        January 2020 - September 2020
                        <ul>
                            <li>made donuts</li>
                            <li>for free</li>
                            <li>and gave them out</li>
                        </ul>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

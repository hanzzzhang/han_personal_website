import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import { Box } from '@mui/material'

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#eee',
                height: '89px',
                display: 'flex',
                gap: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                position: 'static',
            }}
        >
            <a href="https://github.com/hanzzzhang" target="blank">
                <GitHubIcon
                    sx={{
                        color: 'black',
                        width: 30,
                        height: 30,
                    }}
                />
            </a>
            <a href="https://www.linkedin.com/in/hanzhang5976/" target="blank">
                <LinkedInIcon
                    sx={{
                        color: 'black',
                        width: 30,
                        height: 30,
                    }}
                />
            </a>
            <a href="mailto:hanzhang5976@icloud.com" target="blank">
                <EmailIcon sx={{ color: 'black', width: 30, height: 30 }} />
            </a>
            <a href="tel:604-396-4800" target="blank">
                <PhoneIcon sx={{ color: 'black', width: 30, height: 30 }} />
            </a>
        </Box>
    )
}

export default Footer

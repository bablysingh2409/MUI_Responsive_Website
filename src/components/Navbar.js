import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography, Box, Input, Badge } from '@mui/material'
import { Notifications, Pets} from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import React from 'react'

function Navbar() {
    const StyleToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })
    const Search = styled('div')(({ theme }) => ({
        backgroundColor: 'white',
        padding: '0 10px',
        borderRadius: '2px',
        width: '40%'
    }))
    const Icons = styled(Box)(({ theme }) => ({
        display:'flex',
        alignItems:"center",
        gap:"20px"
        // backgroundColor: 'white',
        // padding: '0 10px',
        // borderRadius: theme.shape.borderRadius,
        // width:'40%'
    }))

    return (
        <AppBar position='sticky'>
            <StyleToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Lama</Typography>
                <Pets sx={{ display: { xs: "block", sm: 'none' } }} />
                <Search><Input placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications/>
                    </Badge>
                    <Avatar sx={{width:30,height:30}} src='https://wallpapersmug.com/large/f03025/Hande-Ercel-celebrity.jpg'/>
                </Icons>
            </StyleToolbar>
        </AppBar>
    )
}

export default Navbar
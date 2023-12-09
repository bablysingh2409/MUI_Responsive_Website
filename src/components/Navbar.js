import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography, Box, Input, Badge, Menu, MenuItem } from '@mui/material'
import { Notifications, Pets } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/system';


import React, { useState } from 'react'

function Navbar() {
     const [open,setOpen]=useState(false);
    const theme = useTheme();
    const StyleToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })
    const Search = styled('div')(() => ({
        backgroundColor: 'white',
        padding: '0 10px',
        borderRadius: theme.shape.borderRadius,
        width: '40%',


    }))
    const Icons = styled(Box)(() => ({
        display: 'none',
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: {
            display: 'flex',
        }
    }))

    const UserBox = styled(Box)(() => ({
        display: 'flex',
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        }
    }))

    return (

        <AppBar position='sticky'>
            <StyleToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Lama</Typography>
                <Pets sx={{ display: { xs: "block", sm: 'none' } }} />
                <Search><Input placeholder='Search...' /></Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar onClick={()=>setOpen(true)} sx={{ width: 30, height: 30 }} src='https://wallpapersmug.com/large/f03025/Hande-Ercel-celebrity.jpg' />
                </Icons>
                <UserBox   onClick={()=>setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://wallpapersmug.com/large/f03025/Hande-Ercel-celebrity.jpg' />
                    <Typography variant='span'>Bably</Typography>
                </UserBox>

            </StyleToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                // anchorEl={anchorEl}
                open={open  }
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>



        </AppBar>

    )
}

export default Navbar
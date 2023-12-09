import React from 'react'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import { AccountBox, Groups, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material';

function Sidebar() {
  return (
    <Box  p={2}  flex={1} sx={{display:{xs:'none',sm:'block'}}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Pages'>
              <ListItemIcon>
                <Pages/>  
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Pages'>
              <ListItemIcon>
                <Groups/>  
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Simple-list'>
              <ListItemIcon>
                <Storefront/>  
              </ListItemIcon>
              <ListItemText primary="Markeplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Simple-list'>
              <ListItemIcon>
                <Person/>  
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Simple-list'>
              <ListItemIcon>
                <Settings/>  
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Simple-list'>
              <ListItemIcon>
                <AccountBox/>  
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Simple-list'>
              <ListItemIcon>
                <ModeNight/>  
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>

        </List>

    
    
    </Box>
  )
}

export default Sidebar
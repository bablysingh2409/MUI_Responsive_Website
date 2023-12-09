import React from 'react'
import {Box} from "@mui/material"

function Sidebar() {
  return (
    <Box bgcolor="pink" p={2}  flex={1} sx={{display:{xs:'none',sm:'block'}}}>Sidebar</Box>
  )
}

export default Sidebar
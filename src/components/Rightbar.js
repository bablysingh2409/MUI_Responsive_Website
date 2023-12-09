import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor="skyblue" p={2} flex={2} sx={{display:{xs:'none',sm:'block'}}}>Rightbar</Box>
  )
}

export default Rightbar
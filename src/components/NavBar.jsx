import { Link } from 'react-router-dom' 
import { AppBar, Toolbar, Button, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography component="div" sx={{flexGrow:1}} align='left'>StudInfo.com</Typography>
                
                
                <Button><Link to='/d' style={{color:'white', textDecoration:'none'}} >add</Link></Button>
                <Button><Link to='/v' style={{color:'white', textDecoration:'none'}}>view</Link></Button>
                
        
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar
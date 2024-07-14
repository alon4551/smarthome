import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Rooms } from '../../App'
import { Toolbar, } from '@mui/material';
import Button from '@mui/material/Button';
import NavItem from './navItem';
import { useNavigate } from 'react-router-dom';
function navbar() {
    const { rooms, setRooms } = useContext(Rooms)
    const navigate = useNavigate()
    return (
        <Box  >
            <AppBar position="static">
                <Toolbar>

                    <Button color="inherit" onClick={() => navigate('/add')} sx={{ float: 'right' }} >Add</Button>
                    <Button color='inherit' onClick={() => navigate('/')} sx={{ float: 'right' }} >Home</Button>
                    <Toolbar sx={{ flexGrow: 1 }}>
                        {rooms.map((room, index) => {
                            return (<NavItem key={index} room={room} index={index} />)
                        })}
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default navbar
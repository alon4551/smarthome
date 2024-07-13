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
    const [rooms] = useContext(Rooms)
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static">
                <Toolbar>
                    <Toolbar sx={{ flexGrow: 2 }}>
                        <Button color='inherit' onClick={() => navigate('/rooms')} >Rooms</Button>
                        {/*rooms.map((room, index) => {
                            return (<NavItem key={index} room={room} />)
                        })*/}
                    </Toolbar>
                    <Button color="inherit" onClick={() => navigate('/add')} sx={{ float: 'right' }} >Add Room</Button>
                    <Button color='inherit' onClick={() => navigate('/')} sx={{ float: 'right' }} >Home</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default navbar
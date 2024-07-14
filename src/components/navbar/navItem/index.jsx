import React, { useContext } from 'react'
import { Typography, Switch } from '@mui/material'
import Menu from '@mui/material/Menu'
import { MenuButton } from '@mui/base/MenuButton';
import { Dropdown } from '@mui/base/Dropdown';
import MenuItem from '@mui/material/MenuItem'
import { Rooms } from '../../../App';
function NavItem(props) {
    const { rooms, setRooms } = useContext(Rooms)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const power = (index, power) => {
        console.log(power)
        rooms[props.index].devices[index].power = !power
        setRooms([...rooms])
    }
    return (
        <>
            <Typography key={props.room.name}
                edge='end'
                variant="h6"
                href='/'
                component="button"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 500,
                    padding: 1,
                    color: 'inherit',
                    textDecoration: 'none',
                    borderRadius: 1,
                    backgroundColor: '#1976d3',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: 'lightblue', // Change this to your desired hover color
                    },
                }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {props.room.name}
            </Typography>
            <Menu id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                {props.room.devices.length == 0 ? <MenuItem>None</MenuItem> : <></>}
                {

                    props.room.devices.map((device, index) => {
                        return (
                            <MenuItem key={device.name}>
                                {device.name}<Switch onChange={() => power(index, device.power)} checked={device.power} />
                            </MenuItem>
                        )
                    })
                }

            </Menu>
        </>

    )
}

export default NavItem
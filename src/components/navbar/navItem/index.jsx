import React from 'react'
import { Typography } from '@mui/material'
import Menu from '@mui/material/Menu'
function NavItem(props) {
    return (
        <>

            <Typography key={props.room.name}
                edge='end'
                variant="h6"
                href='/'
                component="a"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 500,
                    padding: 1,
                    color: 'inherit',
                    textDecoration: 'none',
                    borderRadius: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: 'lightgray', // Change this to your desired hover color
                    },
                }}
            >
                {props.room.name}
            </Typography>
            <Menu>

            </Menu>
        </>

    )
}

export default NavItem
import React, { useState, useContext } from 'react'
import { Box, List, ListItem, ListItemText } from '@mui/material'
import { Rooms } from '../../App'
function RoomsPage() {
    const index = useState(0)
    const {rooms} = useContext(Rooms)
    return (
        <Box>
            <List sx={{
                flexGrow: 1,
                width: '100%',
                maxWidth: 360,
                bgcolor: '',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
            }}
                subheader={<li />} >
                {rooms.map((r) => {
                    return (
                        <li key={r.name}>
                            <ul>
                                <ListItem>
                                    <ListItemText >
                                        {r.name}
                                    </ListItemText>
                                </ListItem>
                            </ul>
                        </li>
                    )
                })}
            </List>
            <Box sx={{ flexGrow: 3 }}>

            </Box>
        </Box>
    )
}

export default RoomsPage
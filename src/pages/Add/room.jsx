import { TextField, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Rooms } from '../../App'
function Room() {
    const {rooms, setRooms} = useContext(Rooms)
    const [valid, setValid] = useState(true)
    const [name, setName] = useState('')
    console.log(rooms)
    const addRoom = () => {
        if (!valid)
            alert('Room Name not Valid')
        else {
            setRooms([...rooms, {
                name: name,
                lights: false,
                devices: []
            }])
        }

    }
    const valiedName = (event) => {
        const result = rooms.filter((room) => room.name == event.target.value).length == 0
        setName(event.target.value)
        setValid(result)
    }
    console.log(rooms)
    return (
        <div>
            <TextField id='roomName' label="Room Name" variant='filled' color='primary' onChange={valiedName} error={!valid} />
            <Button color='primary' variant='contained' onClick={() => addRoom()} >Add Room</Button>
        </div>
    )
}

export default Room
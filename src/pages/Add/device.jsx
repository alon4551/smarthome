import React, { useContext, useState } from 'react'
import { Rooms } from '../../App'
import { FormControl, Select, MenuItem, TextField, Button } from '@mui/material'
function Device() {
    const { rooms, setRooms } = useContext(Rooms)
    const [name, SetName] = useState('')
    const [valid, setValid] = useState(true)
    const [index, setIndex] = useState(0)
    const handelChange = (event) => {
        setIndex(event.target.value)
    }
    const valiedName = (event) => {
        const result = rooms[index].devices.filter((device) => device.name == event.target.value.trim())
        if (result.length == 0)
            setValid(true)
        else
            setValid(false)
        SetName(event.target.value.trim())

    }
    const addDevice = () => {
        rooms[index].devices.push({
            name: name
        })
        setRooms([...rooms])
        document.querySelector('#deviceName').value = ''
        SetName('')

    }
    return (
        <div>

            <FormControl>
                <Select
                    onChange={handelChange}>
                    {rooms.map((room, index) => {
                        return (
                            <MenuItem value={index} key={index}>{room.name}</MenuItem>
                        )

                    })}
                </Select>
                <TextField id='deviceName' label="Device Name" variant='filled' color='primary' onChange={valiedName} error={!valid} />
                <Button color='primary' variant='contained' onClick={() => addDevice()} >Add {status}</Button>
            </FormControl>
        </div>
    )
}

export default Device
import React, { createContext, useContext, useState } from 'react'

import Radio from '@mui/material/Radio'
import Room from './room'
import Device from './device'
import Button from '@mui/material/Button'
import { FormControl, FormControlLabel, RadioGroup, Typography, Box } from '@mui/material'

function Add() {
  const [status, setStatus] = useState('room')

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Typography variant='h4'>
        Wellcome to the Add Page
      </Typography>
      <FormControl>
        <Typography variant='h7'>
          please select the type of object that you want to add
        </Typography>
        <RadioGroup>
          <FormControlLabel control={<Radio />} value={'room'} label={'Room'} onChange={() => setStatus('room')} />
          <FormControlLabel control={<Radio />} value={'device'} label={'Device'} onChange={() => setStatus('device')} />
        </RadioGroup>
      </FormControl>

      {status == 'room' ?
        <Room />
        :
        <Device />
      }

    </Box>
  )
}

export default Add
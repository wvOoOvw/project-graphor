import React from 'react'

import { Grid } from '@mui/material'
import { Switch } from '@mui/material'
import { TextField } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'
import { Select } from '@mui/material'

function Edit(props) {
  const { element, property, style, update, component, sx, sendMessage } = props

  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <TextField {...sx.TextFieldSX} fullWidth autoComplete='off' label='Router Value' value={property.value} onChange={e => { property.value = e.target.value; update() }} />
    </Grid>
    <Grid item xs={12}>
      <FormControl {...sx.SelectSX} fullWidth>
        <InputLabel>Router Type</InputLabel>
        <Select {...sx.SelectSX} value={property.type} label='Router Type' onChange={e => { property.type = e.target.value; update() }}>
          <MenuItem value='equal'>Equal</MenuItem>
          <MenuItem value='start'>Start</MenuItem>
          <MenuItem value='includes'>Inclueds</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid >
}

export default Edit
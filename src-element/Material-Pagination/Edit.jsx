import React from 'react'

import { TextField } from '@mui/material'
import { Grid } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'
import { Select } from '@mui/material'
import { Switch } from '@mui/material'

function Edit(props) {
  const { element, property, style, update, component, sx, sendMessage } = props

  return <Grid container spacing={1}>
    <Grid item xs={6}>
      <TextField {...sx.TextFieldSX} fullWidth autoComplete='off' type='number' label='Count' value={property.count} onChange={e => { property.count = e.target.value; update() }} />
    </Grid>
    <Grid item xs={6}>
      <TextField {...sx.TextFieldSX} fullWidth autoComplete='off' type='number' label='Page' value={property.page} onChange={e => { property.page = e.target.value; update() }} />
    </Grid>
    <Grid item xs={12}>
      <FormControl {...sx.SelectSX} fullWidth>
        <InputLabel>Variant</InputLabel>
        <Select {...sx.SelectSX} value={property.variant} label='Variant' onChange={e => { property.variant = e.target.value; update() }}>
          <MenuItem value='text'>Text</MenuItem>
          <MenuItem value='outlined'>Outlined</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl {...sx.SelectSX} fullWidth>
        <InputLabel>Shape</InputLabel>
        <Select {...sx.SelectSX} value={property.shape} label='Shape' onChange={e => { property.shape = e.target.value; update() }}>
          <MenuItem value='rounded'>Rounded</MenuItem>
          <MenuItem value='circular'>Circular</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl {...sx.SelectSX} fullWidth>
        <InputLabel>Color</InputLabel>
        <Select {...sx.SelectSX} value={property.color} label='Color' onChange={e => { property.color = e.target.value; update() }}>
          <MenuItem value='standard'>Standard</MenuItem>
          <MenuItem value='primary'>Primary</MenuItem>
          <MenuItem value='secondary'>Secondary</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl {...sx.SelectSX} fullWidth>
        <InputLabel>Size</InputLabel>
        <Select {...sx.SelectSX} value={property.size} label='Size' onChange={e => { property.size = e.target.value; update() }}>
          <MenuItem value='large'>Large</MenuItem>
          <MenuItem value='medium'>Medium</MenuItem>
          <MenuItem value='small'>Small</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid >
}

export default Edit
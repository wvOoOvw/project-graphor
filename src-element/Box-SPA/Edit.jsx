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
      <TextField {...sx.TextFieldSX} fullWidth autoComplete='off' label='Src' value={property.src} onChange={e => { property.src = e.target.value; update() }} />
    </Grid>
    <Grid item xs={12}>
      <TextField {...sx.TextFieldSX} fullWidth autoComplete='off' label='Render Id' value={property.id} onChange={e => { property.id = e.target.value; update() }} />
    </Grid>
  </Grid >
}

export default Edit
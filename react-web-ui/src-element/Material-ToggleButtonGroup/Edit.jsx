import React from 'react'

import { TextField } from '@mui/material'
import { Grid } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'
import { Select } from '@mui/material'
import { Switch } from '@mui/material'
import { Button } from '@mui/material'
import { Divider } from '@mui/material'

function Edit(props) {
  const { element, update, component, sx, sendMessage } = props

  const [aceDialogOptions, setAceDialogOptions] = React.useState()

  const changeValue = (e) => {
    if (value.exclusive) {
      onChange(Object.assign({}, value, { value: e.target.value }))
    } else {
      onChange(Object.assign({}, value, { value: e.target.value.split(',') }))
    }
  }

  const changeExclusive = (e) => {
    if (!e.target.checked) {
      onChange(Object.assign({}, value, { exclusive: !e.target.checked, value: value.value.toString() }))
    } else {
      onChange(Object.assign({}, value, { exclusive: !e.target.checked, value: value.value.split(',').filter(i => i) }))
    }
  }

  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <TextField {...sx.TextFieldSX} fullWidth autoComplete='off' label='Value' value={value.value} onChange={e => changeValue(e)} />
    </Grid>
    <Grid item xs={12}>
      <FormControl {...sx.SelectSX} fullWidth>
        <InputLabel>Color</InputLabel>
        <Select {...sx.SelectSX} value={value.color} label='Color' onChange={e => onChange(Object.assign({}, value, { color: e.target.value }))}>
          <MenuItem value='standard'>Standard</MenuItem>
          <MenuItem value='primary'>Primary</MenuItem>
          <MenuItem value='secondary'>Secondary</MenuItem>
          <MenuItem value='success'>Success</MenuItem>
          <MenuItem value='error'>Error</MenuItem>
          <MenuItem value='info'>Info</MenuItem>
          <MenuItem value='warning'>Warning</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl {...sx.SelectSX} fullWidth>
        <InputLabel>Size</InputLabel>
        <Select {...sx.SelectSX} value={value.size} label='Size' onChange={e => onChange(Object.assign({}, value, { size: e.target.value }))}>
          <MenuItem value='large'>Large</MenuItem>
          <MenuItem value='medium'>Medium</MenuItem>
          <MenuItem value='small'>Small</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl {...sx.SelectSX} fullWidth>
        <InputLabel>Orientation</InputLabel>
        <Select {...sx.SelectSX} value={value.orientation} label='Orientation' onChange={e => onChange(Object.assign({}, value, { orientation: e.target.value }))}>
          <MenuItem value='horizontal'>Horizontal</MenuItem>
          <MenuItem value='vertical'>Vertical</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>Disabled</div>
      <Switch checked={value.disabled} onChange={e => onChange(Object.assign({}, value, { disabled: e.target.checked }))} />
    </Grid>
    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>Exclusive</div>
      <Switch checked={!value.exclusive} onChange={e => changeExclusive(e)} />
    </Grid>
    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>Full Width</div>
      <Switch checked={value.fullWidth} onChange={e => onChange(Object.assign({}, value, { fullWidth: e.target.checked }))} />
    </Grid>

    <Grid item xs={12}><Divider /></Grid>

    <Grid item xs={12}>
      <Button style={{ textTransform: 'none' }} fullWidth variant='outlined' onClick={() => setAceDialogOptions(true)}>Set Options</Button>
    </Grid>

    {
      aceDialogOptions ?
        <component.AceDialog
          value={JSON.stringify(value.options, null, 2)}
          onChange={v => {
            try {
              const v_ = JSON.parse(v)
              if (!Array.isArray(v_)) throw new Error()
              onChange((value) => value.options = v_)
              setAceDialogOptions(false)
            } catch {
              alert('Format Error')
            }
          }}
          onClose={() => setAceDialogOptions(false)}
          mode='json'
        />
        : null
    }
  </Grid>
}

export default Edit
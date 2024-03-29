import React from 'react'

import { TextField } from '@mui/material'
import { Grid } from '@mui/material'
import { Switch } from '@mui/material'
import { Button } from '@mui/material'
import { Divider } from '@mui/material'

function Edit(props) {
  const { element, property, style, update, component, sx, sendMessage } = props

  const [aceDialogValue, setAceDialogValue] = React.useState()
  const [aceDialogInitValue, setAceDialogInitValue] = React.useState()

  return <Grid container spacing={1}>
    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>Immediate Output</div>
      <Switch checked={property.immediateOuput} onChange={e => { property.immediateOuput = e.target.checked; update() }} />
    </Grid>

    <Grid item xs={12}><Divider /></Grid>

    <Grid item xs={12}>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Use Window Property</div>
        <Switch checked={property.useWindow} onChange={e => { property.useWindow = e.target.checked; update() }} />
      </Grid>
    </Grid>
    
    {
      property.useWindow ?
        <>
          <Grid item xs={12}>
            <TextField {...sx.TextFieldSX} fullWidth autoComplete='off' label='Window Property Name' value={property.windowName} onChange={e => { property.windowName = e.target.value; update() }} />
          </Grid>
        </>
        : null
    }

    <Grid item xs={12}><Divider /></Grid>

    <Grid item xs={12}>
      <Button style={{ textTransform: 'none' }} fullWidth variant='outlined' onClick={() => setAceDialogValue(true)}>Value</Button>
    </Grid>
    <Grid item xs={12}>
      <Button style={{ textTransform: 'none' }} fullWidth variant='outlined' onClick={() => setAceDialogInitValue(true)}>Init Value</Button>
    </Grid>

    {
      aceDialogValue ?
        <component.AceDialog
          value={JSON.stringify(property.value, null, 2)}
          onChange={v => { try { property.value = JSON.parse(v); update(); setAceDialogValue(); } catch { sendMessage('Format Error') } }}
          onClose={() => setAceDialogValue()}
          mode='json'
        />
        : null
    }

    {
      aceDialogInitValue ?
        <component.AceDialog
          value={JSON.stringify(property.initValue, null, 2)}
          onChange={v => { try { property.initValue = JSON.parse(v); update(); setAceDialogInitValue(); } catch { sendMessage('Format Error') } }}
          onClose={() => setAceDialogInitValue()}
          mode='json'
        />
        : null
    }
  </Grid>
}

export default Edit
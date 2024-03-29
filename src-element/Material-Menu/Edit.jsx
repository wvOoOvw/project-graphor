import React from 'react'

import { Grid } from '@mui/material'
import { Button } from '@mui/material'

function Edit(props) {
  const { element, property, style, update, component, sx, sendMessage } = props

  const [aceDialogOptions, setAceDialogOptions] = React.useState()

  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <Button style={{ textTransform: 'none' }} fullWidth variant='outlined' onClick={() => setAceDialogOptions(true)}>Options</Button>
    </Grid>

    {
      aceDialogOptions ?
        <component.AceDialog
          value={JSON.stringify(property.options, null, 2)}
          onChange={v => { try { if (!Array.isArray(JSON.parse(v))) throw new Error(); property.options = JSON.parse(v); update(); setAceDialogOptions(); } catch { sendMessage('Format Error') } }}
          onClose={() => setAceDialogOptions()}
          mode='json'
        />
        : null
    }
  </Grid>
}

export default Edit
import React from 'react'

import { Divider } from '@mui/material'
import { Grid } from '@mui/material'
import { IconButton } from '@mui/material'
import { Paper } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'
import { Select } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Tooltip } from '@mui/material'

import AddBusinessIcon from '@mui/icons-material/AddBusiness'

import Imitation from './utils.imitation'
import { getElementAndParentById, hash } from './utils.common'
import { evalBeforeRenderHook } from './utils.const'
import { TooltipSX, TextFieldSX, AutocompleteSX, SelectSX } from './utils.mui.sx'

function App() {
  const [list, setList] = React.useState(Imitation.state.graphElement)

  const [filter, setFilter] = React.useState(Imitation.state.graphElement.length > 0 ? Imitation.state.graphElement[0].information.type : undefined)

  const handleAdd = e => {
    const hash_ = hash()
    const newElement = { id: hash_, license: e.license.key, name: e.information.name, use: true, hook: [] }

    if (e.information.style) newElement.style = e.information.style.reduce((t, i) => { t[i.value] = i.default ? i.default : {}; return t }, {})
    if (e.information.property) newElement.property = JSON.parse(JSON.stringify(e.information.property))
    if (e.information.children) newElement.children = e.information.children.reduce((t, i) => { t[i.value] = []; return t }, {})
    if (e.information.monitor) newElement.monitor = []
    if (e.information.trigger) newElement.trigger = []

    if (e.information.created) e.information.created(newElement)

    if (Imitation.state.elementSelect !== undefined) {
      const [id, childrenKey] = Imitation.state.elementSelect.split('@')
      const [currentGraphContent, parentGraphContent] = getElementAndParentById(Imitation.state.graphContent, id)
      currentGraphContent.children[childrenKey].push(newElement)
    }

    if (Imitation.state.elementSelect === undefined) {
      Imitation.state.graphContent.push(newElement)
    }

    Imitation.assignState({ graphContentUpdate: hash() })
  }

  return <Grid container spacing={2}>
    <Grid item xs={12}>Element Shop</Grid>
    <Grid item xs={12}><Divider /></Grid>

    <Grid item xs={12}>
      <FormControl fullWidth {...SelectSX}>
        <InputLabel>Filter</InputLabel>
        <Select {...SelectSX} value={filter} label='Filter' onChange={e => setFilter(e.target.value)} >
          {
            list.map(i => i.information.type).reduce((t, i) => t.includes(i) ? t : [...t, i], []).map(i => {
              return <MenuItem key={i} value={i}>{i}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Grid>

    <Grid item xs={12}>
      <Grid container spacing={2}>
        {
          list
            .filter(i => !filter || i.information.type === filter)
            .map(i => {
              return <Grid item xs={12} key={i.license.key}>
                <Tooltip {...TooltipSX} placement='right' title={i.View() ? <div style={{ padding: 8, width: 200, height: 200 }}><i.View /></div> : undefined}>
                  <Paper style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 4, paddingLeft: 12 }}>
                    <div>
                      {i.information.name}
                    </div>
                    <div>
                      <IconButton onClick={() => handleAdd(i)}><AddBusinessIcon style={{ fontSize: 20 }} /></IconButton>
                    </div>
                  </Paper>
                </Tooltip>
              </Grid>
            })
        }
      </Grid>
    </Grid>

  </Grid>
}

export default App
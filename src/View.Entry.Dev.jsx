import React from 'react'

import { Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Dialog } from '@mui/material'
import { DialogContent } from '@mui/material'
import { DialogActions } from '@mui/material'
import { DialogTitle } from '@mui/material'

import NavigationBar from './View.NavigationBar'
import NavigationTabs from './View.NavigationTabs'
import NavigationContent from './View.NavigationContent'

import graphElement from '../src-element/index'

import Imitation from './utils.imitation'
import { hash } from './utils.common'

function ScreenDialog(props) {
  const onCloseMessage = () => {
    Imitation.assignState({ message: 'Follow the instructions to operate' })
  }

  return <Dialog open={true} sx={{ '& .MuiDialog-paper': { width: 'fit-content' } }} onClose={onCloseMessage}>
    <DialogTitle className='font' style={{ fontSize: 14 }}>Experience improvement suggestions</DialogTitle>
    <DialogContent className='font' dividers>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Pressing the keyboard <span style={{ color: Imitation.state.theme.palette.primary.main }}>Ctrl -</span> To zoom out screen size
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions className='font'>
      <Button onClick={props.onClose}>Pass it</Button>
    </DialogActions>
  </Dialog>
}

function App() {
  const [visible, setVisible] = React.useState()
  const [height, setHeight] = React.useState()
  const [screenDialog, setScreenDialog] = React.useState(window.innerWidth < 1800 || window.innerHeight < 900)

  const onMouseOver = () => {
    Imitation.assignState({ elementHover: undefined, elementDragEnd: undefined })
  }

  React.useEffect(() => {
    Imitation.state.graphElement = graphElement
    Imitation.state.graphElementUpdate = hash()

    const cache = localStorage.getItem('graphCache') ? JSON.parse(localStorage.getItem('graphCache')) : undefined

    if (cache) {
      Imitation.state.graphContent = cache.graphContent
      Imitation.state.graphEvent = cache.graphEvent
      Imitation.state.graphConfig = cache.graphConfig
      Imitation.state.graphContentUpdate = hash()
      Imitation.state.graphEventUpdate = hash()
      Imitation.state.graphConfigUpdate = hash()
    }

    Imitation.dispatch()

    setVisible(true)
  }, [])

  React.useEffect(() => {
    const event = () => {
      setHeight(window.innerHeight - 32)

      if (window.innerWidth >= 1800 && window.innerHeight >= 900) setScreenDialog(false)
    }

    event()

    window.addEventListener('resize', event)

    return () => window.removeEventListener('resize', event)
  }, [])

  if (visible === undefined || height === undefined) return null

  return <>
    <div style={{ width: 'calc(100% - 32px)', height: height, display: 'flex', flexDirection: 'column', padding: 16 }} onMouseOver={onMouseOver}>
      <div style={{ marginBottom: 16 }}>
        <NavigationBar />
      </div>
      <div style={{ width: '100%', height: 0, flexGrow: 1, display: 'flex' }}>
        <div style={{ width: 'fit-content', height: '100%', marginRight: 16 }}>
          <NavigationTabs />
        </div>
        <div style={{ width: 0, height: '100%', flexGrow: 1 }}>
          <NavigationContent />
        </div>
      </div>
    </div>

    {
      screenDialog ? <ScreenDialog onClose={() => setScreenDialog()} /> : null
    }
  </>
}

export default App
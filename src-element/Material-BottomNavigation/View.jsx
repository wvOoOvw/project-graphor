import React from 'react'

import { BottomNavigation } from '@mui/material'
import { BottomNavigationAction } from '@mui/material'

function View() {
  return <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <BottomNavigation showLabels>
      <BottomNavigationAction label='A'></BottomNavigationAction>
      <BottomNavigationAction label='B'></BottomNavigationAction>
    </BottomNavigation>
  </div>
}

export default View
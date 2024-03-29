import React from 'react'
import { Tabs, Tab } from '@mui/material'

function Render(props) {
  const { env, update, devParams, property, style, monitor, trigger, children, element, prop } = props

  React.useEffect(() => {
    if (monitor && monitor.setValue) {
      const remove = monitor.setValue(data => {
        property.value = data
        update()
      })
      return () => { remove() }
    }
  }, [])

  React.useEffect(() => {
    if (monitor && monitor.setOptions) {
      const remove = monitor.setOptions(data => {
        property.options = data
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onChange = (e, v) => {
    property.value = v
    update()
    if (trigger && trigger.onChange) trigger.onChange(property.value, e)
  }

  if (env === 'dev') {
    return <Tabs
      {...devParams}
      value={property.value}
      textColor={property.textColor}
      indicatorColor={property.indicatorColor}
      orientation={property.orientation}
      variant={property.variant}
      scrollButtons={property.scrollButtons}
      centered={property.centered}
    >
      {
        property.options.map((i, index) => {
          return <Tab key={index} value={i.value} label={i.label}></Tab>
        })
      }
    </Tabs>
  }

  if (env === 'prod') {
    return <Tabs
      value={property.value}
      onChange={onChange}
      textColor={property.textColor}
      indicatorColor={property.indicatorColor}
      orientation={property.orientation}
      variant={property.variant}
      scrollButtons={property.scrollButtons}
      centered={property.centered}
    >
      {
        property.options.map((i, index) => {
          return <Tab key={index} value={i.value} label={i.label}></Tab>
        })
      }
    </Tabs>
  }
}

export default Render
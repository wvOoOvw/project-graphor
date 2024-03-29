import React from 'react'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

function Render(props) {
  const { env, update, devParams, property, style, monitor, trigger, children, element, prop } = props

  const onChange = (e) => {
    property.value = e.target.value
    update()
    if (trigger && trigger.onChange) trigger.onChange(property.value, e)
  }

  const onOpen = (e) => {
    property.open = e.target.open
    update()
    if (trigger && trigger.onOpen) trigger.onOpen(property.open, e)
  }

  React.useEffect(() => {
    if (monitor && monitor.setValue) {
      const remove = monitor.setValue(data => {
        property.value = data
        update()
        if (trigger && trigger.onChange) trigger.onChange(property.value, e)
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

  if (env === 'dev') {
    const ref = React.useRef()

    React.useEffect(() => {
      if (ref.current) {
        ref.current.addEventListener('mousedown', e => { e.stopPropagation(); e.preventDefault() }, true)
      }
    }, [])

    return <FormControl {...devParams} size={property.size} fullWidth={property.fullWidth} ref={el => ref.current = el}>
      <InputLabel>{property.label}</InputLabel>
      <Select multiple={property.multiple} label={property.label} variant={property.variant} disabled={property.disabled} value={property.value} MenuProps={{ open: false }}>
        {
          property.options.map((i, index) => {
            return <MenuItem key={index} value={i.value}>{i.label}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  }

  if (env === 'prod') {
    return <FormControl size={property.size} fullWidth={property.fullWidth}>
      <InputLabel>{property.label}</InputLabel>
      <Select multiple={property.multiple} label={property.label} variant={property.variant} disabled={property.disabled} open={property.open} value={property.value} onChange={onChange} onOpen={onOpen}>
        {
          property.options.map((i, index) => {
            return <MenuItem key={index} value={i.value}>{i.label}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  }
}

export default Render
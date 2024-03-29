import React from 'react'

function Render(props) {
  const { env, update, devParams, property, style, monitor, trigger, children, element, prop } = props

  React.useEffect(() => {
    if (monitor && monitor.setSrc) {
      const remove = monitor.setSrc(data => {
        property.src = data
        update()
      })
      return () => { remove() }
    }
  }, [])

  if (env === 'dev') {
    return <iframe {...devParams} style={{ ...style.content }} />
  }

  if (env === 'prod') {
    return <iframe style={{ ...style.content }} src={property.src} />
  }
}

export default Render
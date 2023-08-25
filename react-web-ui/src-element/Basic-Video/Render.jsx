import React from 'react'

function Render(props) {
  const { event, style, property, monitor, trigger, env, update } = props

  const ref = React.useRef()

  React.useEffect(() => {
    if (monitor && monitor.setSrc) {
      const remove = monitor.setSrc(data => {
        property.src = data
        update()
      })
      return () => { remove() }
    }
  }, [])

  React.useEffect(() => {
    if (monitor && monitor.setPlay) {
      const remove = monitor.setPlay(data => {
        ref.current.play()
        update()
      })
      return () => { remove() }
    }
  }, [])

  React.useEffect(() => {
    if (monitor && monitor.setPause) {
      const remove = monitor.setPause(data => {
        ref.current.pause()
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onEnded = e => {
    if (trigger && trigger.onEnded) trigger.onEnded(undefined, e)
  }

  return <video
    {...event}
    {...style}
    ref={el => ref.current = el}
    src={property.src}
    poster={property.poster}
    controls={property.controls}
    autoPlay={property.autoplay}
    loop={property.loop}
    onEnded={onEnded}
  />
}

export default Render
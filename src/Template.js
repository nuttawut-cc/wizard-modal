import React from 'react'
import {
  useSpring,
  animated,
} from 'react-spring'
import cns from 'classnames'
import './Template.scss'

export function Button(props) {
  const {
    type,
    children,
    className,
    ...rest
  } = props
  return (
    <div
      {...rest}
      className={cns(
        'temp-button',
        { 'temp-button-primary': type === 'primary' },
        { 'temp-button-secondary': type === 'secondary' },
        { 'temp-button-link': type === 'link' },
        className,
      )}>
      {children}
    </div>
  )
}

ProgressBar.defaultProps = {
  min: 0,
  max: 0,
  delay: 300,
  duration: 300,
  start: false,
  reverse: false,
}

export function ProgressBar(props) {
  const {
    start,
    min,
    max,
    duration,
    delay,
    reverse,
  } = props
  const { width } = useSpring({
    delay,
    reverse,
    reset: true,
    config: { duration },
    width: start ? max : min,
    from: { width: min }
  })
  
  return (
    <div className="temp-progress-bar">
      <animated.div
        style={{ width: width.interpolate(w => `${w}%`) }}
        className="temp-progress-value" 
      />
    </div>
  )
}

export default function Template(props) {
  const {
    content,
    className,
    showBackButton,
    onBack,
    footer,
  } = props

  return (
    <div className={cns(
      'temp-wrapper',
      className
    )}>
      {showBackButton && (
        <div
          className="temp-button-back"
          onClick={onBack}
        >
          Back
        </div>
      )}
      <div className="temp-content">
        {content}
      </div>
      <div className="temp-footer">
        {footer}
      </div>
    </div>
  )
}
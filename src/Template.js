import React from 'react'
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

export default function Layout(props) {
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
          {'<'} Back
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
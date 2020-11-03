import React, {
  useState,
  isValidElement,
  Fragment,
} from 'react'
import { createPortal } from 'react-dom'
import {
  useSpring,
  useTransition,
  animated,
} from 'react-spring'
import cns from 'classnames'
import './Wizard.scss'

const SECTION_NAME = 'wizard-section'

Section.display = 'wizard-section'
export function Section() { }

const isValidSection = (element) => {
  return isValidElement(element) && element.type.display === SECTION_NAME
}

const getSections = (children) => {
  if (children instanceof Array) return children.filter(isValidSection)
  return isValidSection(children) ? [children] : []
}

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout))

Wizard.defaultProps = {
  duration: 200,
  allowProgress: false,
  canOverlayClick: false,
  onClose: () => { },
}

export default function Wizard(props) {
  const {
    isOpen,
    duration,
    children,
    canOverlayClick,
    onClose,
  } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const sections = getSections(children)
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: () => async (next) => {
      await sleep(duration)
      await next({ opacity: 0 })
    }
  })

  const onNext = () => {
    setCurrentIndex(prev => {
      const next = prev + 1
      const last = sections.length - 1
      return next > last ? last : next
    })
  }

  const onPrev = () => {
    setCurrentIndex(prev => {
      const next = prev - 1
      return next < 0 ? 0 : next
    })
  }

  return createPortal(
    <Fragment>
      {transitions.map(({ item, key, props }) =>
        item && (
          <animated.div
            key={key}
            style={props}
            className="wizard"
          >
            <div className="wizard-content">
              {sections.map(({
                props: {
                  children,
                  className,
                  ...rest
                }
              },
                index
              ) => (
                  <SectionAnimated
                    {...rest}
                    key={index}
                    isOpen={isOpen}
                    current={index === currentIndex}
                    duration={duration}
                    onClose={onClose}
                    className={cns(
                      `wizard-section-${index}`,
                      className,
                      { current: index === currentIndex }
                    )}
                  >
                    {children({ onPrev, onNext, onClose, currentIndex })}
                  </SectionAnimated>
                ))}
            </div>
            <div
              className="overlay"
              onClick={canOverlayClick ? onClose : undefined}
            />
          </animated.div>
        )
      )}
    </Fragment>,
    document.getElementById('portal')
  )
}

function SectionAnimated(props) {
  const {
    current,
    children,
    duration,
    onClose,
    isOpen,
    ...rest
  } = props
  const { opacity, ...styles } = useSpring({
    config: { duration: duration },
    delay: !isOpen ? 0 : current ? duration : 0,
    opacity: !isOpen && current ? 0 : current ? 1 : 0,
    from: {
      opacity: !isOpen && current ? 1 : 0,
    }
  })

  return (
    <animated.section
      {...rest}
      style={{
        ...styles,
        opacity,
        display: opacity.interpolate((o) => {
          if (o === 0) return 'none'
        })
      }}
    >
      {children}
      <div
        className="button-close"
        onClick={onClose}
      >
        x
      </div>
    </animated.section>
  )
}

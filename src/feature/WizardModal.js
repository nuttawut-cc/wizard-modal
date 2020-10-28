import React, {
  useState,
  Fragment,
} from 'react'
import { createPortal } from 'react-dom'
import './WizardModal.scss'

export default function WizardModal(props) {
  const {
    isOpen,
    onRequestClose,
    children
  } = props
  const [currentPage, setCurrentPage] = useState(1)
  const childrens = children instanceof Array
    ? children : [children]

  function getPageNumbers() {
    return childrens.map(({ props }) => props.page)
  }

  function getLastPage() {
    return Math.max.apply(null, getPageNumbers())
  }

  function onNextPage() {
    setCurrentPage(prevState => prevState + 1)
  }

  function onPrevPage() {
    setCurrentPage(prevState => prevState - 1)
  }

  function onCloseModal() {
    onRequestClose()
    setCurrentPage(1)
  }

  return isOpen && createPortal(
    <div className="wizard-modal-wrapper">
      <div className="wizard-modal-content">
        <Fragment>
          {childrens.map(({ type, props: childrenProps }) => (
            React.createElement(
              type,
              {
                ...childrenProps,
                currentPage,
                onNextPage,
                onPrevPage,
                key: childrenProps.name,
                lastPage: getLastPage(),
              },
            )
          ))}
          <div
            className="wizard-modal-close"
            onClick={onCloseModal}
          />
        </Fragment>
      </div>
      <div
        className="wizard-modal-overlay"
        onClick={onCloseModal}
      />
    </div>,
    document.getElementById('portal')
  )
}

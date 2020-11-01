import React, {
  useState,
  Fragment,
} from 'react'
import Wizard, {
  Section
} from './Wizard'

function App() {
  const [isOpen, setIsOpen] = useState(true)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <Wizard
        isOpen={isOpen}
        onClose={onClose}
        canOverlayClick
      >
        <Section>
          {({ onNext }) => (
            <Fragment>
              <h3 className="heading">Section 1</h3>
              <article className="article">
                It is a long established fact that a reader will be
                readable content of a page when looking at its layout.
                using Lorem Ipsum is that it has a more-or-less normal
                of letters, as opposed to using 'Content here, content
                it look like readable English. Many desktop publishing
              </article>
              <div className="button-group">
                <button type="button" onClick={onNext}>Next {'>'}</button>
              </div>
            </Fragment>
          )}
        </Section>
        <Section>
          {({ onPrev, onNext }) => (
            <Fragment>
              <h3 className="heading">Section 2</h3>
              <article className="article">
                It is a long established fact that a reader will be
                readable content of a page when looking at its layout.
                using Lorem Ipsum is that it has a more-or-less normal
                of letters, as opposed to using 'Content here, content
                it look like readable English. Many desktop publishing
              </article>
              <div className="button-group">
                <button type="button" onClick={onPrev}>{'<'} Previous</button>
                <button type="button" onClick={onNext}>Next {'>'}</button>
              </div>
            </Fragment>
          )}
        </Section>
        <Section>
          {({ onPrev, onNext }) => (
            <Fragment>
              <h3 className="heading">Section 3</h3>
              <article className="article">
                It is a long established fact that a reader will be
                readable content of a page when looking at its layout.
                using Lorem Ipsum is that it has a more-or-less normal
                of letters, as opposed to using 'Content here, content
                it look like readable English. Many desktop publishing
              </article>
              <div className="button-group">
                <button type="button" onClick={onPrev}>{'<'} Previous</button>
                <button type="button" onClick={onNext}>Next {'>'}</button>
              </div>
            </Fragment>
          )}
        </Section>
        <Section>
          {({ onPrev, onNext }) => (
            <Fragment>
              <h3 className="heading">Section 4</h3>
              <article className="article">
                It is a long established fact that a reader will be
                readable content of a page when looking at its layout.
                using Lorem Ipsum is that it has a more-or-less normal
                of letters, as opposed to using 'Content here, content
                it look like readable English. Many desktop publishing
              </article>
              <div className="button-group">
                <button type="button" onClick={onPrev}>{'<'} Previous</button>
                <button type="button" onClick={onNext}>Next {'>'}</button>
              </div>
            </Fragment>
          )}
        </Section>
        <Section>
          {({ onPrev }) => (
            <Fragment>
              <h3 className="heading">Section 5</h3>
              <article className="article">
                It is a long established fact that a reader will be
                readable content of a page when looking at its layout.
                using Lorem Ipsum is that it has a more-or-less normal
                of letters, as opposed to using 'Content here, content
                it look like readable English. Many desktop publishing
              </article>
              <div className="button-group">
                <button type="button" onClick={onPrev}>{'<'} Previous</button>
              </div>
            </Fragment>
          )}
        </Section>
      </Wizard>
      <button type="button" onClick={onOpen}>Trigger Modal</button>
    </div>
  )
}

export default App

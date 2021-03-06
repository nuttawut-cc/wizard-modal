import React, {
  useState,
} from 'react'
import Wizard, {
  Section,
  eventTypes,
} from './Wizard'
import Template, {
  Button,
  ProgressBar,
} from './Template'
import './App.scss'

function App() {
  const [isOpen, setIsOpen] = useState(true)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  const onFinish = () => {
    alert('Thank you for information!')
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
            <Template
              content={
                <article className="article">
                  <h3 className="heading">Section 1</h3>
                  <div>
                    It is a long established fact that a reader will be
                    readable content of a page when looking at its layout.
                    using Lorem Ipsum is that it has a more-or-less normal
                    of letters, as opposed to using 'Content here, content
                    it look like readable English. Many desktop publishing
                  </div>
                </article>
              }
              footer={
                <div className="button-group">
                  <Button type="primary" onClick={onNext}>NEXT</Button>
                  <Button type="secondary">WELCOME TO SITE</Button>
                </div>
              }
            />
          )}
        </Section>
        <Section>
          {({ onPrev, onNext, current, event }) => (
            <Template
              showBackButton
              onBack={onPrev}
              content={
                <article className="article">
                  <ProgressBar
                    min={10}
                    max={30}
                    start={current}
                    reverse={event === eventTypes.PREV}
                  />
                  <h3 className="heading">Section 2</h3>
                  <div className="categories">
                    <div className="category" title="A" />
                    <div className="category" title="B" />
                    <div className="category" title="C" />
                    <div className="category" title="D" />
                    <div className="category" title="E" />
                    <div className="category" title="D" />
                  </div>
                </article>
              }
              footer={
                <div className="button-group">
                  <Button type="primary" onClick={onNext}>NEXT</Button>
                  <Button type="secondary" onClick={onPrev}>BACK</Button>
                </div>
              }
            />
          )}
        </Section>
        <Section>
          {({ onPrev, onNext, current, event }) => (
            <Template
              showBackButton
              onBack={onPrev}
              content={
                <article className="article">
                  <ProgressBar
                    min={30}
                    max={55}
                    start={current}
                    reverse={event === eventTypes.PREV}
                  />
                  <h3 className="heading">Section 3</h3>
                  <div>
                    a long established fact that a reader will be
                    readable content of a page when looking at its layout.
                    using Lorem Ipsum is that it has a more-or-less normal
                    of letters, as opposed to using 'Content here, content
                    it look like readable English
                  </div>
                </article>
              }
              footer={
                <div className="button-group">
                  <Button disabled>CONTINUE</Button>
                  <Button type="link" onClick={onNext}>skip</Button>
                </div>
              }
            />
          )}
        </Section>
        <Section>
          {({ onPrev, onNext, current, event }) => (
            <Template
              showBackButton
              onBack={onPrev}
              content={
                <article className="article">
                  <ProgressBar
                    min={55}
                    max={80}
                    start={current}
                    reverse={event === eventTypes.PREV}
                  />
                  <h3 className="heading">Section 4</h3>
                  <div className="categories">
                    <div className="category" title="A" />
                    <div className="category" title="B" />
                    <div className="category" title="C" />
                    <div className="category" title="D" />
                    <div className="category" title="E" />
                    <div className="category" title="D" />
                  </div>
                </article>
              }
              footer={
                <div className="button-group">
                  <Button disabled>CONTINUE</Button>
                  <Button type="link" onClick={onNext}>skip</Button>
                </div>
              }
            />
          )}
        </Section>
        <Section>
          {({ onPrev, current, event }) => (
            <Template
              showBackButton
              onBack={onPrev}
              content={
                <article className="article">
                  <ProgressBar
                    min={80}
                    max={100}
                    start={current}
                    reverse={event === eventTypes.PREV}
                  />
                  <h3 className="heading">Section 5</h3>
                  <div>
                    a long established fact that a reader will be
                    readable content of a page when looking at its layout.
                    using Lorem Ipsum is that it has a more-or-less normal
                    of letters, as opposed to using 'Content here, content
                    it look like readable English
                  </div>
                </article>
              }
              footer={
                <div className="button-group">
                  <Button type="primary" onClick={onFinish}>CONTINUE SHOPPING</Button>
                </div>
              }
            />
          )}
        </Section>
      </Wizard>
      <button type="button" onClick={onOpen}>Trigger Modal</button>
    </div >
  )
}

export default App

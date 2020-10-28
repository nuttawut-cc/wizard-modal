import React, {
  useState,
} from 'react'
import { Form, Input, Button } from 'antd'
import WizardModal from './feature/WizardModal'
import Question from './components/Question'

function ErrorMessage({ text }) {
  return <div className="error-message">{text}</div>
}

export default function App() {
  const [form, setForm] = useState({})
  const [isOpenModal, setIsOpenModal] = useState(true)

  function onOpenModal() {
    setIsOpenModal(true)
    console.log('modal is opened!')
  }

  function onCloseModal() {
    setIsOpenModal(false)
    setForm({})
    console.log('modal is closed!')
  }

  function onFinishForm() {
    alert(`Finish! Thank you for information\n${JSON.stringify(form)}`)
  }

  function onValuesChange(name, values) {
    setForm(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        ...values,
      }
    }))
  }

  return (
    <div className="App">
      <Button
        type="primary"
        onClick={onOpenModal}
      >
        open modal
      </Button>
      <WizardModal
        isOpen={isOpenModal}
        onRequestClose={onCloseModal}
      >
        <Question
          page={1}
          name="questionA"
          initialValues={form.questionA}
          onValuesChange={onValuesChange}
        >
          <h3 className="heading">Question A</h3>
          <Form.Item
            label="FirstName"
            name="firstName"
            rules={[
              {
                required: true,
                message: <ErrorMessage text="Please input your firstname!" />,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Question>
        <Question
          page={2}
          name="questionB"
          initialValues={form.questionB}
          onValuesChange={onValuesChange}
        >
          <h3 className="heading">Question B</h3>
          <Form.Item
            label="LastName"
            name="lastName"
            rules={[
              {
                required: true,
                message: <ErrorMessage text="Please input your lastname!" />,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Question>
        <Question
          page={3}
          name="questionC"
          initialValues={form.questionC}
          onValuesChange={onValuesChange}
          onFinishForm={onFinishForm}
        >
          <h3 className="heading">Question C</h3>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: <ErrorMessage text="Please input your age!" />,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Question>
      </WizardModal>
    </div>
  )
}

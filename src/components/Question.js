import React from 'react'
import { Form, Button } from 'antd'

function FormWrapper(props) {
  const {
    name,
    initialValues,
    onValuesChange,
    children,
    onFinish,
  } = props
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      name={name}
      initialValues={initialValues}
      onValuesChange={values => onValuesChange(name, values)}
      onFinish={onFinish}
    >
      {children}
    </Form>
  )
}

export default function Question(props) {
  const {
    name,
    children,
    onNextPage,
    onPrevPage,
    initialValues,
    onValuesChange,
    onFinishForm,
    currentPage,
    lastPage,
    page,
  } = props
  const isLastQuestion = currentPage === lastPage

  return currentPage === page && (
    <FormWrapper
      name={name}
      initialValues={initialValues}
      onValuesChange={onValuesChange}
      onFinish={
        !isLastQuestion
          ? onNextPage
          : onFinishForm
      }
    >
      {children}
      <Form.Item>
        <Button
          type="primary"
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="button"
        >
          Back
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          className="button"
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </Button>
      </Form.Item>
    </FormWrapper>
  )
}

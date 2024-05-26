import React from 'react'
import { Form, Input } from 'antd'
import { useField } from 'formik'

const InputFiled = ({
   label,
   name,
   placeholder = '',
   formItemClassName = '',
   labelClassName = '',
   hasFeedback,
   asComponent: Component = Input,
   ...props
}) => {
   const [field, meta, helpers] = useField(name)
   const hasError = meta.touched && meta.error
   const Error = hasError ? (
      <div
         className="error"
         style={{
            color: 'red',
            marginLeft: 10,
            marginBottom: 10,
            fontSize: 14,
            fontWeight: 400,
            textAlign: 'left',
         }}
      >
         {meta.error}
      </div>
   ) : undefined
   const { setValue } = helpers

   const onChangeHandler = (event) => setValue(event.target.value)

   return (
      <div className="input-parent">
         {label && <p className="inputFiled-label poppins">{label}</p>}
         <Form.Item
            style={{ margin: '2px 0 0' }}
            className={formItemClassName}
            htmlFor={name}
            validateStatus={hasError}
            help={Error}
         >
            <Component
               id={name}
               placeholder={placeholder}
               {...field}
               {...props}
               onChange={onChangeHandler}
            />
         </Form.Item>
      </div>
   )
}

export default InputFiled

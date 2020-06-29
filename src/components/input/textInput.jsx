import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import './textInput.scss'

const TextInput = ({
  name,
  className,
  placeholder,
  icon,
  maxLength,
  errorMessage,
  invalidText,
  value,
  onChange
}) => {
  const [textValue, setTextValues] = useState(value)
  const dispatch = useDispatch()

  const handleChange = e => {
    setTextValues(e.target.value)
    dispatch(onChange(e.target.value))
  }

  return (
    <div className={`textInput center ${className}`}>
      <input
        type='url'
        placeholder={placeholder}
        className={`form-control border-input${icon ? ' hasIcon' : ''}`}
        value={textValue}
        name={name}
        maxLength={maxLength}
        onChange={handleChange}
        required
      />
      {invalidText && <div className='error-message'>{errorMessage}</div>}
    </div>
  )
}

TextInput.defaultProps = {
  onChange: noop,
  className: '',
  placeholder: null,
  icon: null,
  maxLength: null,
  value: null,
  invalidText: false,
  errorMessage: ''
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  maxLength: PropTypes.number,
  invalidText: PropTypes.bool,
  errorMessage: PropTypes.string
}

export default TextInput

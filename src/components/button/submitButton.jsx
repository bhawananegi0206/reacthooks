import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import './submitButton.scss'

const SubmitButton = ({ className, disabled, children, onClick }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(onClick())
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      disabled={disabled}
      className={`button ${className}`}
    >
      {children}
    </button>
  )
}

SubmitButton.defaultProps = {
  className: 'transparent',
  disabled: false,
  onClick: undefined
}

SubmitButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default SubmitButton

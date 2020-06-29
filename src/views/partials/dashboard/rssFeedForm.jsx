import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextInput from '../../../components/input/textInput.jsx'
import SubmitButton from '../../../components/button/submitButton.jsx'
import ErrorMessages from '../../../components/errors/errorMessages.jsx'
import { getRssFeedData } from '../../../store/dashboard/actions'
import './rssFeedForm.scss'

function rssFeedForm () {
  const [values, setValues] = useState({
    rssFeedUrl: '',
    submitButtonDisabled: true,
    itemsList: [],
    errors: '',
    invalidText: false
  })

  const dispatch = useDispatch()

  const handleChange = e => {
    setValues({
      rssFeedUrl: e,
      submitButtonDisabled: false
    })
  }

  const handleSubmit = e => {
    if (e) event.preventDefault()
    handleSave()
  }

  const handleSave = () => {
    const url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i
    const { rssFeedUrl } = values
    if (!rssFeedUrl.match(url_pattern)) {
      setValues({
        invalidText: true,
        errors: ''
      })
    } else {
      dispatch(getRssFeedData(rssFeedUrl))
    }
  }

  return (
    <React.Fragment>
      <div className='form--body rssFeed'>
        <form className='h-100' onSubmit={handleSave}>
          <div className='flex flex-dir-col h-100'>
            <div className='flex-1 flex flex-dir-col flex-align-center'>
              <div className='form-group'>
                <TextInput
                  name='rssFeedUrl'
                  value={values.rssFeedUrl}
                  placeholder='Enter RSS URL to display'
                  onChange={handleChange}
                  className='large'
                  errorMessage='Please enter correct RSS feed URL'
                  invalidText={values.invalidText}
                />
              </div>
              <SubmitButton
                onClick={handleSubmit}
                disabled={values.submitButtonDisabled}
                className='btn-primary btn'
              >
                <i className='avb avb-link' />
                Click here
              </SubmitButton>
            </div>
          </div>
        </form>
        {values.errors && <ErrorMessages messages={values.errors} />}
      </div>
      </React.Fragment>
  )
  //}
}

export default rssFeedForm

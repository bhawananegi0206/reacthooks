import React from 'react'
import RssFeedForm from './rssFeedForm.jsx'
import RssFeedResult from './rssFeedResult.jsx'
import './dashboardWidget.scss'

export default function DashboardWidgets () {
  return (
    <div className='dashboardWidgets h-100'>
      <div className='flex dashboardWidgets-title flex-align-center flex-justify-center'>
        RSS FEED{' '}
      </div>
      <RssFeedForm />
      <RssFeedResult />
    </div>
  )
}

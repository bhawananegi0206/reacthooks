import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleList from '../../../components/list/SimpleList.jsx'
// import { customfilter } from '../../../helpers';

import './rssFeedResult.scss'

function rssFeedResult () {
  const feedData = useSelector(state => state.dashboard.feedData)

  const downloadableLinks = (items = []) =>
    items.customfilter(item => item.links[0].url.indexOf('http') === 0)

  const { items, title, description } = feedData
  const itemsList = downloadableLinks(items)

  return (
    <React.Fragment>
      {itemsList.length > 0 && (
        <div className='rssFeedResult'>
          <div className='rssFeedResult-listTitle center'>{title}</div>
          <div className='rssFeedResult-listDesc center'>{description}</div>
          <SimpleList items={itemsList} />
        </div>
      )}
    </React.Fragment>
  )
}

rssFeedResult.defaultProps = {
  feedData: undefined
}

rssFeedResult.propTypes = {
  feedData: PropTypes.object
}
export default rssFeedResult

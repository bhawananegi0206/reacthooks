import React, { useState, useMemo} from 'react';
import PropTypes from 'prop-types';

import './SimpleList.scss'

const SimpleList = ({ items }) => {
  const [lists, setListValues] = useState({
    selectedItemList: items,
    currentPage: 1,
    itemsPerPage: 5
  })

  const handleClick = event => {
    setListValues({
      selectedItemList: items,
      currentPage: Number(event.target.id),
      itemsPerPage: 5
    })
  }

  const { selectedItemList, currentPage, itemsPerPage } = lists;
 // const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfLastItem = useMemo(() => currentPage * itemsPerPage);
  const indexOfFirstItem = useMemo(() => indexOfLastItem - itemsPerPage);
  const renderList = useMemo(() =>  items && selectedItemList.slice(indexOfFirstItem, indexOfLastItem));
  //const renderList =  items && selectedItemList.slice(indexOfFirstItem, indexOfLastItem);
  const pagination = []
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pagination.push(i)
  }

  return (
    <div>
      <div className='simpleList'>
        {renderList.map(it => (
          <div key={it} className='simpleList selectList--item'>
            <div className='flex flex-align-left flex-dir-col pos-rel'>
              <a href={it.links[0].url} className='simpleList-title'>
                {it.title}
              </a>
              <div className="simpleList-author">
                {it.authors[0].name}
                </div>
            </div>
          </div>
        ))}
      </div>
      {
        <div className='simpleList-pagination flex flex-justify-center'>
          {pagination.map(number => (
            <li key={number} id={number} onClick={handleClick}>
              {number}
            </li>
          ))}
        </div>
      }
    </div>
  )
}

SimpleList.defaultProps = {
  items: []
}

SimpleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default SimpleList

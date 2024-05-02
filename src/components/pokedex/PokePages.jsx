/* eslint-disable no-unused-vars */
import React from 'react'

const pokePages = ({page, setPage, total}) => {

    const handlePrev = (num) => {
        if (page > num) {
            setPage(page - num);
        } else{
            setPage(total);
        }
        
    }

    const handleNext = (num) => {
        if (page <= total - num) {
            setPage(page + num )
        }else{
            setPage(1)
        }
       
    }

  return (
    <div>
      <button onClick={()=>{handlePrev(5)}}>{'<<'}</button>
      <button onClick={()=>{handlePrev(1)}}>{'<'}</button>
      <span>{page} ➖ {total}</span>
      <button onClick={()=>{handleNext(1)}}>{'>'}</button>
      <button onClick={()=>{handleNext(5)}}>{'>>'}</button>
    </div>
  )
}

export default pokePages;

import React from 'react'
import { showFormattedDate } from '../Utils/TimeStamp'
function NoteContent({title,body,createdAt}) {
  return (
    <div className='space-y-1 w-full'>
      <h3 className='font-bold text-lg truncate'>{title}</h3>
      <p className='text-gray-400'>{showFormattedDate(createdAt)}</p>
      <p >{body}</p>
    </div>
  )
}

export default NoteContent
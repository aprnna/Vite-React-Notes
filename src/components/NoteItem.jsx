import React from 'react'
import NoteContent from './NoteContent'

function NoteItem({id,title,body,createdAt,onDelete,onPindah,btnValue}) {
  return (
    <div className='relative p-5 flex-grow w-[300px] bg-gray-900 rounded-3xl group hover:bg-gray-800'>
      <NoteContent title={title} body={body} createdAt={createdAt}/>
      <div className='absolute top-4 right-4 space-x-3 invisible group-hover:visible'>
        <button className='text-red-400' onClick={()=>onDelete(id)}><img src='./cross-circle.svg' className='w-5'/></button>
        <button className='text-yellow-400' onClick={()=>onPindah(id)}><img src={btnValue} className='w-5'/></button>
      </div>
    </div>
  )
}

export default NoteItem
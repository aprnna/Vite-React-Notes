import React from 'react'
import NoteItem from './NoteItem'

function ListArsipNotes({notes, onDelete, onActive}) {
  const arsipNotes = notes.filter(note=>note.archived !== false)
  return (
    <div className='flex gap-4'>
      {arsipNotes.length !== 0 ? arsipNotes.map((note)=>(
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} btnValue={'./undo.svg'} onPindah={onActive} {...note}/>
      )):
        <p className='mx-auto'>No Record</p>
      }
    </div>
  )
}

export default ListArsipNotes
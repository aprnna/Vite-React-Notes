import React from 'react'
import NoteItem from './NoteItem'

function ListActiveNotes({notes, onDelete, onArsip}) {
  const activeNotes = notes.filter(note=>note.archived !== true)
  return (
    <div className='flex gap-4 flex-wrap'>
      {activeNotes.length !== 0 ? (activeNotes.map((note)=>(
        <NoteItem key={note.id} btnValue='./box.svg' onPindah={onArsip} onDelete={onDelete} {...note}/>
        ))):
        <p className='mx-auto'>No Record</p>
      }
    </div>
  )
}

export default ListActiveNotes
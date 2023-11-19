import React from 'react'
import ListActiveNotes from './ListActiveNotes'
import ListArsipNotes from './ListArsipNotes'

function ListNotes({notes, onDelete, onArsip, onActive}) {
  return (
    <section className='px-10 py-5 space-y-4 mx-auto max-w-[80vw]'>
      <section className=''>
        <h1 className='font-bold text-lg'>Active Notes</h1>
        <ListActiveNotes notes={notes} onDelete={onDelete} onArsip={onArsip}/>
      </section>
      <section>
        <h1 className='font-bold text-lg'>Arsip Notes</h1>
        <ListArsipNotes notes={notes} onDelete={onDelete} onActive={onActive}/>
      </section>
      
    </section>
  )
}

export default ListNotes
import React from 'react'
import { getData } from '../Data'
import ListNotes from '../components/ListNotes'
import Navbar from '../components/Navbar'
import Swal from 'sweetalert2'
import { InputNote } from '../components/InputNote'

export class MyNotes extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      notes: getData(),
      search:''
    }
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this)
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this)
    this.onActiveEventHandler = this.onActiveEventHandler.bind(this)
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this)
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this)
  }
  onDeleteEventHandler(id){
    Swal.fire({
      title: "Do you want to delete notes?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const notes = this.state.notes.filter(note=>note.id !== id)
        this.setState({notes})
        Swal.fire("Deleted!", "", "success");
      } 
    });
    
  }
  onArchiveEventHandler(id){
    const noteTarget = this.state.notes.filter(note => note.id === id)
    const Archived = noteTarget[0].archived = true
    this.setState({Archived})
  }
  onActiveEventHandler(id){
    const noteTarget = this.state.notes.filter(note => note.id === id)
    const Actived = noteTarget[0].archived = false
    this.setState({Actived})
  }
  onSearchEventHandler(e){
    const value = e.target.value.toLowerCase()
    this.setState({search:value})
    e.preventDefault()
  }
  onAddNoteEventHandler({title,body}){
    this.setState((prev)=>{
      return{
        notes:[
          ...prev.notes,
          {
            id: +new Date(),
            title,
            body,
            archived:false,
            createdAt:new Date().toISOString()
          }
        ]
      }
    })
    console.log(this.state.notes)
  }
  render(){
    const notes = !this.state.search? this.state.notes : this.state.notes.filter(note=>note.title.toLowerCase().match(this.state.search))
    return (
      <div>
        <Navbar onSearch={this.onSearchEventHandler}/>
        <InputNote addNote={this.onAddNoteEventHandler}/>
        <ListNotes 
          notes={notes} 
          onDelete={this.onDeleteEventHandler} 
          onArsip={this.onArchiveEventHandler} 
          onActive={this.onActiveEventHandler}/>
      </div>
    )
  }
}


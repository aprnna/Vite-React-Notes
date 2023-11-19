import React from 'react'
import Swal from 'sweetalert2'

export class InputNote extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title:'',
      body:'',
      limit:50
    }
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }
  onTitleChangeEventHandler(e){
    if(this.state.limit-e.target.value.length >= 0){
      this.setState(()=>{
        return{
          title:e.target.value
        }
      })
    }
  }
  onBodyChangeEventHandler(e){
    this.setState(()=>{
      return{
        body:e.target.value
      }
    })
  }
  onSubmitEventHandler(e){
    e.preventDefault()
    if(this.state.title && this.state.body){
      this.props.addNote(this.state)
      this.setState({
        title:'',
        body:''
      })
      Swal.fire({
        title: "Note Created Successfully!",
        icon: "success"
      });
    }else{
      Swal.fire({
        title: "Data Cannot be Empty!",
        text:"Isi Judul dan Catatan Terlebih Dahulu",
        icon: "warning"
      });
    }
  }
  render(){
    const titleLength = this.state.title.length
    return (
      <div className='max-w-md mx-auto my-10 space-y-4'>
        <h1 className='text-lg font-bold'>New Note</h1>
        <p className='text-right'>Remaining Characters: {this.state.limit-titleLength}</p>
        <form className='flex flex-col space-y-4' onSubmit={this.onSubmitEventHandler}>
          <input placeholder='Title' value={this.state.title} onChange={this.onTitleChangeEventHandler} className='bg-black p-4 border-gray-800 border-solid border-2'/>
          <textarea placeholder='Note' value={this.state.body} onChange={this.onBodyChangeEventHandler} className='bg-black border-gray-800 border-solid border-2 p-4'/>
          <button type='submit' className='bg-gray-800 p-2 hover:bg-gray-700'>Create</button>
        </form>
      </div>
    )
  }
  
}

import classes from './Form.module.css'

import { useRef } from 'react'



const Form = dataProps => {



  const titleRef = useRef('')
  const descriptionRef = useRef('')



  const submitHandler = event => {

    event.preventDefault()

    const title = titleRef.current.value.trim()
    const description = descriptionRef.current.value.trim()

    if(title.length > 0 && description.length > 0) {

      const item = {
        title: title,
      	description: description
      }
      dataProps.onSubmit(item)
      
    }
    
  }


  return (

    <form className={ classes.form } onSubmit={ submitHandler }>



      <input
        type='text'
        placeholder='title'
        ref={ titleRef }
      />

      <input
        type='text'
        placeholder='description'
        ref={ descriptionRef }
      />

      <button>{ dataProps.status ? 'adding' : 'add' }</button>


      
    </form>
    
  )
  

  
}



export default Form

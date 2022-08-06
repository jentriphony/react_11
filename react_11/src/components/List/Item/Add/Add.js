import { useState } from 'react'
import useFetch from './../../../../hooks/fetch'
import Section from './../../../UI/Section'
import Form from './Form'



const Add = dataProps => {



  const [status, setStatus] = useState(false)
  const [error, setError] = useState('')



  const submitHandler = useFetch
  const submitProps = {
    setStatus: setStatus,
    setError: setError,
    url: 'https://dummyjson.com/products/add',
    method: 'POST',
    onSubmit: dataProps.onSubmit,
  }
  const submitHandler_ = item => {

    submitHandler({ submitProps })
    
  }


  return (

    <Section>



      <Form status={ status } onSubmit={ submitHandler_ } />

      { error && (
	<p>{ error }</p>
      ) }


      
    </Section>

  )


  
}



export default Add

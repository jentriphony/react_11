import useFetch from './../../../../hooks/fetch'
import Section from './../../../UI/Section'
import Form from './Form'



const Add = dataProps => {



  const fetchHook = useFetch({
    url: 'https://dummyjson.com/products/add',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    onSuccess: dataProps.onSubmit
  })
  const error = fetchHook.error


  return (

    <Section>



      <Form status={ fetchHook.status } onSubmit={ fetchHook.handler } />

      { error && (
      	<p>{ error }</p>
      ) }


      
    </Section>

  )


  
}



export default Add

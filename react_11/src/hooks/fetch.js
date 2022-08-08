import { useState } from 'react'



const useFetch = dataProps => {



  const [status, setStatus] = useState(false)
  const [error, setError] = useState('')



  const url = dataProps.url
  const method = dataProps.method
  const get = method === undefined
  const post = method === 'POST'
  const onSuccess = dataProps.onSuccess
  const handler = async handlerProps => {
    setStatus(true)
    setError('')
    try {
      let fetchProps = null
      if(post) {
        fetchProps = {
          method: method,
          headers: { ...dataProps.headers },
          body: JSON.stringify({ ...handlerProps })
        }
      }
      const responce = await fetch(url, fetchProps ? { ...fetchProps } : null)
      if(!responce.ok) {
        throw new Error(get ? 'error_fetch' : 'error_add')
      }
      const data = await responce.json()
      if(get) {
        onSuccess(data.products)
      } else if(post) {
        onSuccess(data)
      }
    } catch(error_) {
      setError(error_.message || 'error')
    }
    setStatus(false)
  }


  return {
    status,
    error,
    handler
  }



}



export default useFetch

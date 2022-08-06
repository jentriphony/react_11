const useFetch = async dataProps => {



  const setStatus = dataProps.setStatus
  const setError = dataProps.setError
  const url = dataProps.url
  const method = dataProps.method
  setStatus(true)
  setError('')
  try {
    if(method === 'POST') {
      const responce = await fetch(url, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ ...dataProps.item })
      })
      if(!responce.ok) {
	throw new Error('error_add')
      }
      const data = await responce.json()
      dataProps.onSubmit(data)
    } else if(method === 'get') {
      const responce = await fetch(url)
      if(!responce.ok) {
	throw new Error('error_fetch')
      }
      const data = await responce.json()
      dataProps.setList(data.products)
    }
  } catch(error_) {
    setError(error_.message || 'error')
  }
  setStatus(false)
  
}



export default useFetch

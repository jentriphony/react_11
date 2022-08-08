import {
  useState,
  useEffect,
  Fragment
} from 'react'
import useFetch from './hooks/fetch'
import List from './components/List/List'
import Add from './components/List/Item/Add/Add'



function App() {


  
  const [list, setList] = useState([])



  const fetchHook = useFetch({
    url: 'https://dummyjson.com/products?limit=5&select=title,description',
    onSuccess: setList
  })
  const fetchHandler = fetchHook.handler
  


  useEffect(() => {

    fetchHandler()

  }, [])



  const addHandler = item => {

    setList(previousList => {
      const id = previousList.length > 0 ? list.reduce((previousItem, currentItem) => {
        return +previousItem.id > +currentItem.id ? previousItem : currentItem
      }).id + 1 : 1
      return [
        {
          ...item,
          id: id
        },
	      ...previousList
      ]
    })
    
  }


  return (

    <Fragment>



      <Add onSubmit={ addHandler } />

      <List
        list={ list }
        status={ fetchHook.status }
        error={ fetchHook.error }
        onFetch={ fetchHandler }
      />
      


    </Fragment>
    
  )


  
}



export default App

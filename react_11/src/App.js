import {
  useState,
  useEffect,
  Fragment
} from 'react'
import useFetch from './hooks/fetch'
import List from './components/List/List'
import Add from './components/List/Item/Add/Add'



function App() {


  
  const [status, setStatus] = useState(false)
  const [error, setError] = useState('')
  const [list, setList] = useState([])



  const fetchHandler = useFetch
  const fetchProps = {
    setStatus: setStatus,
    setError: setError,
    url: 'https://dummyjson.com/products?limit=5&select=title,description',
    method: 'get',
    setList: setList
  }
  const fetchHandler_ = () => {

    fetchHandler(fetchProps)

  }



  useEffect(() => {

    fetchHandler_()
    
  }, [])



  const addHandler = item => {

    setList(previousList => {
      const id = list.reduce((previousItem, currentItem) => {
	return +previousItem.id > +currentItem.id ? previousItem : currentItem
      }).id + 1
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
	status={ status }
	error={ error }
	onFetch={ fetchHandler_ }
      />
      


    </Fragment>
    
  )


  
}



export default App

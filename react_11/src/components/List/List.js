import classes from './List.module.css'

import Section from './../UI/Section'
import Item from './Item/Item'



const List = dataProps => {



  const list = dataProps.list
  const listLength = list.length
  let content = null
  if(dataProps.error) {
    content = (

      <button onClick={ dataProps.onFetch }>
      	try again
      </button>
      
    )
  } else if(dataProps.status) {
    content = (

      <p>fetching</p>
      
    )
  } else if(listLength > 0) {
    content = (

      <ul>
        { list.map(item => (
          <Item key={ item.id } item={ item } />
        )) }
      </ul>
      
    )
  } else if(listLength === 0) {
    content = (

      <h2>no items</h2>
    
    )
  }
  

  return (

    <Section>



      <div className={ classes.container }>
      	{ content }
      </div>


      
    </Section>
    
  )
  


}



export default List

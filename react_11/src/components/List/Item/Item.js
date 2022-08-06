import classes from './Item.module.css'



const Item = dataProps => {



  const item = dataProps.item


  return (

    <li className={ classes.item }>



      <p>{ item.title }</p>

      <p>{ item.description }</p>


      
    </li>
    
  )

  
  
}



export default Item

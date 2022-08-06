import classes from './Section.module.css'



const Section = dataProps => {



  return (

    <section className={ classes.section }>



      { dataProps.children }



    </section>
    
  )


  
}



export default Section

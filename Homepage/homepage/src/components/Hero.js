const Hero = (props) => {
 
    const style = {
      'top': '100px', 
      'left': 0,
    }
    
    return(
      <div style={style}>
        <img src={props.url} id={props.id} alt={props.alt}/>
      </div>
    )
  }

  export default Hero;
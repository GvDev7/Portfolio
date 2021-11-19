const Hero = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const style = {
      'top': '100px', 
      'left': 0,
    }
    
    return(
      <div style={style}>
        <img src={props.url} id={props.id}/>
      </div>
    )
  }

  export default Hero;
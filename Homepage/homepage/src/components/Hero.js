const Hero = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const style = {
      'position': 'fixed',
      'top': '100px', 
      'left': 0,
      'min-width': '100%',
      'min-height': '100%'
    }
    
    return(
      <div style={style}>
        <img src={props.url}/>
      </div>
    )
  }

  export default Hero;
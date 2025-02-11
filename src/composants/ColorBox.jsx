import {useState} from 'react'
import PropTypes from 'prop-types'

function ColorBox(props){
    const {initialColor,colorOptions}=props;
    const [color,setColor]=useState(initialColor)
    const colorer=()=>{
        setColor(colorOptions[Math.floor(Math.random() * colorOptions.length)]);
    }
    const style={width:"100px",height:"100px",backgroundColor:color}
    return(
        <>
          <div style={style}>

          </div>
          <button onClick={colorer}>Changer du couleur</button>
        </>
    )
}

ColorBox.propTypes={
    initialColor:PropTypes.string.isRequired,
    colorOptions:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ColorBox;
import{useState} from 'react';
import PropTypes from 'prop-types'

function ListManager(props){
  const {initialItems,placeholder} = props;
  const [items,setItems]=useState(initialItems);
  function add(e){
    setItems([...items,e])
  }
  const e=<input type="text" placeholder={placeholder}/>
  return(
    <>
     <h1>Liste:</h1>
     {e}
     <button onClick={add(e)}>Ajouter</button>
    </>
  )
}

ListManager.propTypes={
    initialItems:PropTypes.array.isRequired,
    placeholder:PropTypes.string.isRequired
}

export default ListManager;
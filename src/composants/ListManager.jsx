import{useState} from 'react';
import PropTypes from 'prop-types'

function ListManager(props){
  const {initialItems,placeholder} = props;
  const [items,setItems]=useState(initialItems);
  const [inputValue, setInputValue] = useState("");
  const add = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
};
const handleInputChange = (e) => {
    setInputValue(e.target.value);
};
const supprimer=(index)=>{
    setItems(items.filter((_,i)=>i!==index));
}
  return(
    <>
     <h1>Liste:</h1>
     <ul>
        {items.map((item, index) => (
                    
                    <li key={index}>
                        {item}
                        <button onClick={()=>supprimer(index)}>Supprimer</button>
                    </li>
                    
                ))}
    </ul>
     <input type="text" placeholder={placeholder} value={inputValue} onChange={handleInputChange}/>
     <button onClick={add}>Ajouter</button>
    </>
  )
}

ListManager.propTypes={
    initialItems:PropTypes.array.isRequired,
    placeholder:PropTypes.string.isRequired
}

export default ListManager;
import { useState } from "react";
import PropTypes from 'prop-types'

function GradeManagement(props){
    const {initialNotes}=props;
    const [notes,setNotes]=useState(initialNotes);
    const [inputValue, setInputValue] = useState("");
    const[moy,setMoy]=useState(null);
    const addGrade=()=>{
            if(inputValue>=0 && inputValue<=20)
                setNotes([...notes,inputValue])
                setInputValue("")
        }; 
    
    const deleteGrade=(index)=>{
        setNotes(notes.filter((_,i)=> i !== index))
    }
    const calculateAvg=()=>{
        setMoy(notes.reduce((acc,val)=>{
            acc+=val;
            return acc
        },0)/notes.length)
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <>
        <h1>Liste des notes:</h1>
        <ul>
            {notes.map((note,index)=>(
                <li key={index}>
                    {note}
                    <button onClick={()=>deleteGrade(index)}>Supprimer</button>
                </li>
            ))}
            
        </ul>
        <input type="text" value={inputValue} placeholder="placez votre note" onChange={handleInputChange}/>
        <button onClick={addGrade}>Ajouter la note</button>
        <button onClick={calculateAvg}>Calculer la moyenne</button>
        <p>{moy}</p>
        </>
    )
}

GradeManagement.propTypes={
    initialNotes:PropTypes.arrayOf(PropTypes.number).isRequired
}
export default GradeManagement
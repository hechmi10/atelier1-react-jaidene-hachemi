import Counter from './composants/Counter'
import './App.css'
import ListManager from './composants/ListManager'
import ColorBox from './composants/ColorBox'
import GradeManagement from './composants/GradeManagement'
import TodoList from './composants/ToDoList'

function App() {

  return (
    <>
      <div>
        <Counter initialCount={0} Step={5}/>
        <ListManager initialItems={['React', 'Angular' ,'VueJs']} placeholder={"Entrez un nouveau élément"}/>
        <ColorBox initialColor={"red"} colorOptions={["red","blue","yellow","green"]}/>
        <GradeManagement initialNotes={[12.5,10.5,14.5,17]}/>
        <TodoList initialTasks={[{ id: 1, name: "Faire les courses", priority: "Haute", completed: false },
        { id: 2, name: "Réviser React", priority: "Moyenne", completed: true },
        { id: 3, name: "Faire du sport", priority: "Basse", completed: false },]}/>
      </div>
    </>
  )
}

export default App

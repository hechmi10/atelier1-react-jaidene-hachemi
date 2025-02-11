import Counter from './composants/Counter'
import './App.css'
import ListManager from './composants/ListManager'

function App() {

  return (
    <>
      <div>
        <Counter initialCount={0} Step={5}/>
        <ListManager initialItems={['React', 'Angular' ,
'VueJs']} placeholder={"Entrez un nouveau élément"}/>
      </div>
    </>
  )
}

export default App

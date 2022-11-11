import ListItem from './Components/ListItem'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Shopping List:</h1>
      <ol>
        <ListItem name= "Beans" amount= {5}/>
        <ListItem name= "Greens" amount= {4}/>
        <ListItem name= "Potatoes" amount= {3}/>
        <ListItem name= "Tomatoes" amount= {2}/>
      </ol>
    </div>
  );
}

export default App;

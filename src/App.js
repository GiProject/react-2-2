import './App.css';
import Portfolio from './Components/Portfolio';
import Projects from './Components/Projects';


function App() {

  let filter = ["All", "Websites", "Flayers", "Business Cards"];

  return (
    <div className="App">
      <div className="conteiner">
        <Portfolio 
          projects = { Projects }
          filter = { filter } 
        />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Store from './Components/Store';


function App() {

  let filter = ["All", "Websites", "Flayers", "Business Cards"];

  return (
    <div className="App">
      <div className="conteiner">
        <Store />
      </div>
    </div>
  );
}

export default App;

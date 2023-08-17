// Import data

// Import components
import './App.css';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Sidebar from './Components/Sidebar';

function App(){
  return (
      <div className="App">
      <div>
        <Sidebar />
        </div>
        <div>
        <Header />
        <Gallery />
        </div>
      </div>
  );
}

export default App;

import './App.css';
import StaticsData from './components/StaticsData';
import SearchBar from './components/SearchBar';
import NavBar from './components/Navbar';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="StaticsData" element={<StaticsData/>}></Route>
          <Route exact path="SearchBar" element={<SearchBar/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

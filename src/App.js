import TechList from './components/TechList'
import AddTech from './components/AddTech'
import Home from './components/Home'
import SearchTech from './components/SearchTech'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/TechList' element={<TechList/>}/>
      <Route path='/AddTech' element={<AddTech/>}/>
      <Route path='/SearchTech' element={<SearchTech/>}/>
      </Routes>
      
     </Router>
    </div>
  );
}

export default App;

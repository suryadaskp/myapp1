
import './App.css';

import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import View from './components/View';
import Data from './components/Data';



function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/d" element={<Data data={{sname:'',sgrade:''}} method='post'/>}></Route>
        <Route path="/v" element={<View/>}></Route>
        
        
      </Routes>
      
    </div>
  );
}

export default App;

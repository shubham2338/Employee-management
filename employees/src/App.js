
import './styles/App.css';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmp from './components/AddEmp';
import AllEmp from './components/AllEmp';
import ActiveEmp from './components/ActiveEmp';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/add" element={<AddEmp/>}/>
      <Route exact path="/all" element={<AllEmp/>}/>
      <Route exact path="/active" element={<ActiveEmp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

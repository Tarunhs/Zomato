import './App.css';
import CateringCardDetails from './components/CateringCardDetails';
import CateringDetails from './components/CateringDetails';
import Home from './components/Home';
import { Routes, Route  } from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route element={<Home />} path='/' />
        <Route element={<CateringDetails />} path='/cateringDetails' />
        <Route element={<CateringCardDetails />} path='/cateringcarddetail' />
      </Routes>
    </div>
  );
}

export default App;
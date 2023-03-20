import Cart from './component/Layout/Cart';
import MedicineForm from './component/Form/MedicineForm';
import { Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route  path='/medicineForm' element={ <MedicineForm />}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;

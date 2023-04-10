import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        
      <Route path="/" element={<ProtectedRoutes />}>
      <Route path='/' element={<Dashboard/>}></Route>
     </Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      {/* <Route path="/" element={<Noticeboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;

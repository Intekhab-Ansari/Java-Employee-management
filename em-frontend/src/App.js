import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
       <Route index element={ <EmployeeList/> } />
       <Route path="/" element={ <EmployeeList/> } />
       <Route path="/addEmployee" element={ <AddEmployee/>} />
       <Route path="/editEmployee/:id" element={ <UpdateEmployee/>} />
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;

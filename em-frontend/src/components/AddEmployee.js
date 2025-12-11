import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'
import { toast } from 'react-toastify';

const AddEmployee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name:"",
        phone:"",
        email:"",
    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

    const saveEmployee = (e) =>{
        e.preventDefault();

        // Validation
        if (!employee.name.trim() || !employee.phone.trim() || !employee.email.trim()) {
            toast.error("All fields are required!");
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(employee.email)) {
            toast.error("Invalid email format!");
            return;
        }

        EmployeeService.saveEmployee(employee)
        .then((response) => {
            toast.success('Employee added sucessfully');
            console.log("saved ",response);
            navigate("/")
        })
        .catch((error) => {
            toast.error("❌ Failed to add employee: " + (error.response?.data || error.message));
            console.log(error);
        })
    }

    const reset = (e) =>{
        e.preventDefault();
        setEmployee({
            name:"",
            phone:"",
            email:"",
        });
    }

  return (
    <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
        <div className='text-4xl tracking-wider font-bold text-center py-4 px-8'>
             <p>Add 🧑🏼‍💻 New Employee</p>
        </div>

        <div className='mx-10 my-2'>
            <input 
            type='text'
            name="name"
            value={employee.name}
            onChange={(e)=> handleChange(e)}
            className="w-full py-2 my-4 text-slate-800" placeholder='Name'></input>
           
            <input
            type='tel'
            name='phone'
            value={employee.phone}
            onChange={(e)=> handleChange(e)}
             className="w-full py-2 my-4 text-slate-800" placeholder='Phone'></input>
            
            <input 
            type='email'
            name='email'
            value={employee.email}
            onChange={(e)=> handleChange(e)}
            className="w-full py-2 my-4 text-slate-800" placeholder='Email'></input>
        </div>

        <div className='flex my-4 space-x-4 px-20'>
            <button
             onClick={saveEmployee}
            className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'> Save </button>
            <button 
            onClick={reset}
            className='bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded'>  Clear </button>
            <button 
              onClick={()=> navigate("/")}
              className='bg-red-400 hover:bg-red-700 py-2 px-6 rounded'>  Cancel </button>
        </div>
    </div>
  )
}

export default AddEmployee
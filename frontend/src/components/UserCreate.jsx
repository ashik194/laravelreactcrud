import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../http';

export default function UserCreate() {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate()
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData(values => ({...values, [name]:value}));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        http.post('/user/create',userData).then(res =>{
            navigate('/');
        })
    }

  return (
    <div>
        <form onSubmit={formSubmit} method="POST">
            <label htmlFor="">Name</label>
            <input type="text" name="name" className='form-control' id="" value={userData.name || ''} onChange={handleChange} />
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" className='form-control' value={userData.email || ''} onChange={handleChange} />
            <label htmlFor="">Password</label>
            <input type="password" name="password" className='form-control' id="" value={userData.password || ''} onChange={handleChange}/>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

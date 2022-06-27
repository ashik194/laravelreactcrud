import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import http from '../http'


export default function UserEdit(props) {
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers = () =>{
        http.get('/user/'+id+'/edit').then((res) => {
            setUserData({
                name: res.data.name,
                email: res.data.email
            });
        });
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData(values => ({...values, [name] : value}));
    }

    const submitForm = (e) => {
        e.preventDefault();
        http.put('/user/'+id+'/edit',userData).then(res =>{
            navigate('/');
        })
    }

  return (
    <div>
        <form method="POST" onSubmit={submitForm}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' className='form-control' value={userData.name || ''} onChange={handleChange} />
            <label htmlFor="">Email</label>
            <input type="email" name='email' className='form-control' value={userData.email || ''} onChange={handleChange} />
            <button className='btn btn-info'>Submit</button>
        </form>
    </div>
  )
}

import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import http from '../http'

export default function Home() {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers = () =>{
        http.get('/users').then(res => {
            setUser(res.data);
        })
    }

    const deleteUser = (id) => {
        http.delete('/user/'+id+'/delete').then(res=>{
            fetchUsers();
        })
    }

  return (
    <div>
        <h1>Home Page</h1>
        <table className='table table-striped table-success'>
            <thead>
                <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-info" to={{pathname: '/edit/'+user.id}}>Edit</Link>
                            <Link className="btn btn-primary" to={{pathname: "/view/"+user.id}}>View</Link>
                            <button className='btn btn-danger' onClick={()=>{deleteUser(user.id)}}>Delete</button>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

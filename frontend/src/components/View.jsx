import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import http from '../http';

export default function View(props) {
    const [userData, setUserData] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUserData();
    },[]);

    const fetchUserData = () =>{
        http.get('/user/'+id+'/show').then(res=>{
            setUserData({
                name: res.data.name,
                email: res.data.email
            })
        })
    }
    

  return (
    <div>
        <div>
            <h3>Name: </h3>
            <p>{userData.name}</p>
            <h5>Email: </h5>
            <p>{userData.email}</p>
        </div>
    </div>
  )
}

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../App'
import {Table,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  
  const [blogs,setBlogs] = useState([])
  const navigate = useNavigate()

  let getBlogs = async() =>{
    try {
      let res = await axios.get(API_URL)
      console.log(res.data[0].address.city)
      if (res.status === 200){
        setBlogs(res.data)
      }
    } catch (error) {
      alert("Error Occured")      
    }
    
  }

  useEffect(()=>{
    getBlogs()
  },[])

  const handleDelete = async(e)=>{
    try {
      let res = await axios.delete(`${API_URL}/${e.id}`)
      if(res.status === 200)
      {
        alert("deleted.")
        getBlogs()
      }
    } catch (error) {
      
    }
  }

  return <>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Phone No.</th>
          <th>Email</th>
          <th>Website</th>
          <th>Address</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        blogs.map((e,i)=>{
          return<> 
          <tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.username}</td>
            <td>{e.phone}</td>
            <td>{e.email}</td>
            <td>{e.website}</td>
            <td>{[e.address.suite," ,",e.address.street," ,",e.address.city," ,",e.address.zipcode," , latitude : ",e.address.geo.lat," ,longitude : ",e.address.geo.lng]}</td>
            <td>{[e.company.name," ",e.company.catchPharse," ,",e.company.bs]}</td>
            <td>
              <Button onClick={()=>navigate('/edit/'+e.id)}>Edit</Button>
              &nbsp;&nbsp;
              <Button variant='danger' onClick={()=>handleDelete(e)}>Delete</Button>
            </td>
          </tr>
          </>
        })
      }
      </tbody>
    </Table>
  </>
}

export default Dashboard
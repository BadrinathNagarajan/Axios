import React,{useEffect, useState} from 'react'
import Post from './Post'
import {Form,Button} from 'react-bootstrap';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Create() {
  const {id} = useParams()
  const [name,setName] = useState("")
  const [website,setWebsite] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [username,setUser] = useState("")
  const [address,setAddr] = useState("")

  const navigate = useNavigate()

  const getBlogbyID = async ()=>{
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      if (res.status === 200){
        setName(res.data.name) 
        setWebsite(res.data.website)
        setPhone(res.data.phone)
        setEmail(res.data.email)
        setUser(res.data.username)
      }
    } catch (error) {
      alert("Error Occured")
    }
  }

  useEffect(()=>{
    if(id){
      getBlogbyID()
    }
  },[])

  const handleCreate= async()=>{
    try {
        let res = await axios.post(API_URL,{
          name,username,email,phone,website
        })
        console.log(res)
        if (res.status === 201)
        {
          alert("Blog submitted for review.")
          navigate('/')
        }
        } catch (error) {
      
        }
    }

    const handleEdit= async()=>{
      try {
          let res = await axios.put(`${API_URL}/${id}`,{
            name,username,email,phone,website,id
          })
          console.log(res)
          if (res.status === 200)
          {
            alert("Blog submitted for review.")
            navigate('/dashboard')
          }
          } catch (error) {
        
          }
      }
  
  return (<>
  <h2 style={{textAlign:"center"}}>Create your Blog here</h2>
    <div className='createwrapper'>
        <div className='formwrapper'>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the Name" value={name} onChange={(e)=>setName(e.target.value)}/>        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setUser(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>phone</Form.Label>
        <Form.Control type="text" placeholder="Enter the phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>address</Form.Label>
        <Form.Control type="text" placeholder="Enter the Address" value={address} onChange={(e)=>setAddr(e.target.value)}/>
      </Form.Group> 

      <Form.Group className="mb-3">
        <Form.Label>website</Form.Label>
        <Form.Control type="text" placeholder="Enter the Website name" value={website} onChange={(e)=>setWebsite(e.target.value)}/>
      </Form.Group>
{/*  
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Enter the Description here"style={{height:"100px"}} onChange={(e)=>setDesc(e.target.value)}/>
      </Form.Group>  */}

      <Button variant="primary" onClick={()=>{
        if(id){
          handleEdit()
        }
        else{
          handleCreate()
        }
      }
      }>
        Submit
      </Button>
    </Form>
        </div>        
        <div className='previewrapper'>
            <Post name={name} username={username} phone={phone} email={email} website={website} address={address}/>
        </div>
    </div>
    </>
  )
}

export default Create
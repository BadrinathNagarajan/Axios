import React,{useState,useEffect} from 'react'
import Post from './Post'
import axios from 'axios'
import { API_URL } from '../App'

function Home() {

  const [blogs,setBlogs] = useState([])

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

  return (
    <div className="homeWrapper">
      {
        blogs.map((e,i)=>{
          return <Post key={i} name={e.name} username={e.username} phone={e.phone} email={e.email} website={e.website} address={[e.address.suite," ,",e.address.street," ,",e.address.city," ,",e.address.zipcode," , latitude : ",e.address.geo.lat," ,longitude : ",e.address.geo.lng]} company={[e.company.name," ",e.company.catchPharse," ,",e.company.bs]}/>
        })
      }
    </div>
  )
}

export default Home
import React from 'react'
import {Card} from 'react-bootstrap'

function Post({name,website,phone,email,username,address,company}) {
  return <>
  <Card style={{ width: '35rem' }}>
      <Card.Body>
        <Card.Title>{name?name:"Name here"} </Card.Title>
        <Card.Text>
          USERNAME : {username?username:"username here"}
        </Card.Text>
        <Card.Text>
          EMAIL : {email?email:"email here"}
        </Card.Text>
        <Card.Text>
          PHONE NUMBER : {phone?phone:"phone number here"}
        </Card.Text>
        <Card.Text>
          WEBSITE : {website?website:"website here"}
        </Card.Text>
        <Card.Text>
          ADDRESS :{address?address:"address here"}
        </Card.Text> 
        <Card.Text>
          COMPANY :{company?company:"company here"}
        </Card.Text> 
      </Card.Body>
    </Card>
    </>
    }


export default Post
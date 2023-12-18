import React from 'react'
import { Form,Button } from 'react-bootstrap';

function register() {
  
  
    return (
    
       
<Form className='text-dark w-100  '>

<Form.Group className="mb-3  " controlId="formBasicName" style={{width:300,}} >
          <Form.Control type="text" placeholder="name"  />
                 </Form.Group>  
                        
                       
                 <Form.Group className="mb-3  " controlId="formBasicName" style={{width:300,}} >
                  <Form.Control type="text" placeholder="username"  />
                 </Form.Group>  
                        
                 <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:300}} >
                            <Form.Control type="email" placeholder="Enter Email ID" />
                          </Form.Group>  
                          <Form.Group className="mb-3" controlId="formBasicPasswd" style={{width:300}}>
                            <Form.Control type="password" placeholder="Enter Password"  />
                          
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="formBasicPasswd" style={{width:300}}>
                            <Form.Control type="" placeholder="Enter Phone Number"  />
                          
                    </Form.Group>  
                    <Button variant="success" type="submit">
        Submit
      </Button>
                         
 </Form>
                   
   
  )
};



export default register
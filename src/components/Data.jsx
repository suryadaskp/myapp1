
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Data = (props) => {
    var[inputs,setInput] = useState(props.data)

    const inputHandler = (e)=>{
        const{name,value}=e.target
        setInput((inputs)=>({...inputs,[name]:value}))
    }
 const readVal = ()=>
 {
    console.log("clicked");
    console.log("inputs:",inputs);

    if(props.method==="post")
    axios.post("http://localhost:3001/create",inputs)
    .then((response) => {
        alert("success")
    })
    .catch(err => console.log(err))
   

    if(props.method==="put"){
      axios.put("http://localhost:3001/update/"+inputs._id,inputs)
      .then((response) => {
        alert("updated")
   
    window.location.reload(false)
  })
    .catch(err => console.log(err))

   
     } 

 }


    
  return (
    <div>
       <br></br><br></br><br></br><br></br>
        <TextField label='Name' name='sname' value={inputs.sname} variant='outlined' onChange={inputHandler}/><br></br>
        <br/>
       
        <TextField label='Grade' name='sgrade' value={inputs.sgrade} variant='outlined' onChange={inputHandler}/><br></br>
        <br/>
        <Button variant='contained' color='success' onClick={readVal}>SUBMIT</Button>
    </div>
  )
}

export default Data
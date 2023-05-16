/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Data from './Data';

const View = () => {
    var[students,setStudent] = useState([]);
    var[update,setUpdate] = useState(false);
    var[singlevalue,setSingleValue] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:3001/View')
        .then(response=>{
            console.log("response:",response.data)
            setStudent(students=response.data);
        })
        .catch(err=>console.log(err))
    },[])
    const deleteValues = (id,sname)=>
    {
        console.log("delete clicked:"+id)
        console.log("delete clicked:"+sname)
        
        axios.delete("http://localhost:3001/delete/"+id)
        .then(response=>{
            console.log("response.id")
            
            alert("delete");
            window.location.reload(false)    
        })
    }
    const updateValues = (value)=>{
        console.log("update clicked",value)
       setSingleValue(value)
       setUpdate(true)
    }
    var finalJSX = <TableContainer>
        <Table>
                <TableHead><br/><br/><br/><br/>
                    <TableRow>
                        <TableCell style={{color:"red"}}>Name</TableCell>
                        <TableCell style={{color:"red"}}>Grade</TableCell>
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                    {
                    students.map((value,index)=>{
                        return(
                            <TableRow key={index}>
                            <TableCell>{value.sname}</TableCell>
                            <TableCell>{value.sgrade}</TableCell>
                            <TableCell><Button onClick={()=>deleteValues(value._id,value.sname)}> <DeleteIcon color='error' ></DeleteIcon> </Button></TableCell>
                            <TableCell><Button variant='contained' color='success' onClick={()=>updateValues(value)}>UPDATE</Button></TableCell>
                        </TableRow>
                        )
                    }
                    )}
                    
                </TableBody>
            </Table>
            </TableContainer>
    
    if(update)
    
    finalJSX = <Data data={singlevalue} method='put'></Data>
  return (
    
         
  finalJSX
           
       
        
  )
}

export default View
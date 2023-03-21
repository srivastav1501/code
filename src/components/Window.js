import React, { useState } from 'react'
import {Dialog, DialogActions,Button, DialogContent, DialogTitle} from '@mui/material'

function Window(props) {
  const [name , setName]= useState('');
  const [photo, setPhoto] = useState('');
  const [location, setLocation]= useState('');
  const [date, setDate] = useState('')
    let [idc, setIdc]= useState(45)
   
  const reset= ()=>{
    props.setId('')
    
    setIdc(()=>++idc)
      setName('');
      setPhoto('');
      setLocation('');
  }
 
    
  return (
    <div>
      <Dialog open={props.switch} onClose={()=>props.setSwitch(false)}>
        <DialogTitle>Add Candidate</DialogTitle>
        <DialogContent>
          <label htmlFor='name' >Name :</label> <br></br>
            <input id='name' type='text'  value={name} onChange={(e)=>setName(e.target.value)}/> <br></br>
            <label htmlFor='name' >Photo_url :</label>  <br></br>
            <input type='text' id='photo'  value={photo} onChange={(e)=>setPhoto(e.target.value)}/>  <br></br>
            <label htmlFor='name' >Location :</label> <br></br>
            <input type='text' id='location' value={location} onChange={(e)=>setLocation(e.target.value)}/> <br></br>
            <label htmlFor='name' >Date_Applied :</label> <br></br>
            <input type='text' id='location' value={date} onChange={(e)=>setDate(e.target.value)}/> <br></br>
        </DialogContent>  
        <DialogActions>
            <Button variant='outlined'  Size='Medium' onClick={()=>{reset(); props.setSwitch(false)}}>Cancel</Button>
            <Button variant='outlined'  Size='Medium' onClick={()=>{props.newCandidate(idc,photo, name, location, date, props.stage); props.setSwitch(false); reset()}}>Add </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Window

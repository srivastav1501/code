import React, { useState } from 'react';
import Body from './components/Body';
import Window from './components/Window'
import Data from './components/Data'

const App = () => {
    const [Candidates, setCandidates] = useState(Data);
    const [ide, setId] =useState();
    const [open , setOpen] = useState(false);
    const [stage, setStage]= useState();

    const newCandidate = (id,photo, name, location, date, Stage)=>{
      let  newEmp = {
              id:id,
              Candidate_name: name,
              Photo: photo,
              Location: location,
              Date_Applied: date,
              Stage : Stage,
        }
         setCandidates([...Candidates,newEmp]);
       }
 return(
  <div className='container'>
    <Window switch={open} setSwitch={setOpen} stage={stage} setId={setId} newCandidate={newCandidate}/>
   <Body setSwitch={setOpen}  setStage={setStage} ide={ide} setId={setId}  setCandidates={setCandidates} Candidates={Candidates}/>
  </div>
 )
};

export default App;


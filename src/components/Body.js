import React from 'react';
import './body.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';


const Body = (props) => {

  const sections = ['Source', 'Applied', 'In-Touch', 'Interview', 'Hired', 'Rejected'];
  const [data, setD] = useState();

  const dragStarted = (e) => {
    props.setId(() => e.target.id)
    let st = e.target.parentNode.firstChild.innerText;
    e.dataTransfer.setData('stage', st)
    //  console.log(props.ide)
  }

  const draging = (e) => {
    e.preventDefault();

    let elem = '';
    if (e.target.parentNode.classList.contains('id-card')) {
      elem = e.target.parentNode.parentNode;
    }
    else if (e.target.parentNode.classList.contains('body-section')) {
      // console.log("body")
      elem = e.target.parentNode;
    }
    else if (e.target.parentNode.classList.contains('loc')) {
      elem = e.target.parentNode.parentNode.parentNode;
    }
    else if (e.target.parentNode.classList.contains('dat')) {
      elem = e.target.parentNode.parentNode.parentNode;
    }
    else {
      elem = e.target.parentNode;
    }
    setD(elem.firstChild.innerText);
    // console.log(data);
  }

  const dragDroped = async (e) => {

    const cnd = await props.Candidates.filter((itm) => parseInt(itm.id) === parseInt(props.ide));
    cnd[0].Stage = data;
    const cd = await props.Candidates.filter((itm) => parseInt(itm.id) !== parseInt(props.ide));
    props.setCandidates([...cd, ...cnd]);
    props.setId('')
    setD('');
  }

  return (
    <div className='body'>
      {sections.map((section, index) => (
        <div droppable='true' key={index} id={section} className="body-section">
          <h2 className='head'>{section}</h2>

          {props.Candidates.filter((candidate) => candidate.Stage === section).map((candidate, index) => (
            <div draggable onDragStart={(e) => dragStarted(e)} onDragOver={(e) => draging(e)} key={index} onDrop={(e) => dragDroped(e)} id={candidate.id} className="id-card">
              <img draggable={false} src={candidate.Photo} alt="candidate" />
              <h3>{candidate.Candidate_name}</h3>
              <p className='loc'><strong>Location:</strong> {candidate.Location}</p>
              <p className='dat'><strong >Date Applied:</strong> {candidate.Date_Applied}</p>
            </div>
          ))}
          <Button variant='outlined' fontSize="Large" size='Medium' onClick={() => { props.setSwitch(true); props.setStage(section) }} value={section}><AddIcon /></Button>

        </div>
      ))}
    </div>
  );
};

export default Body;

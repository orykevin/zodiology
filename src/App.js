import React from 'react'
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./comp/calculator.js";
import Zodiaccard from "./comp/zodiaccard.js";
import { useState, useRef } from "react"
import Allist from "./comp/allist.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [start,setStart] = useState({
    start:false,
})
  const [display,setDisplay] = useState({
    chn:false,
    wst:false,
    list1:false,
  })
  const [date,setDate] = useState({
    day:1,
    month:1,
    year:0,
  });
  const [zodiac,setZodiac] = useState({
    west:true,
    chins:false,
    wzod:"",
    czod:"",
    elmczod:"",
  });
  const stateRef = useRef(0);
  const [loveWindow,setLovewnd] = useState(false);
  const [pass,setPass] = useState({
    fr:false,
    sc:false,
});

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-head">
        <h1>Zodiology</h1>
        <h3>Zodiac Calculator</h3>
        </div>
        <nav className='app-nav'>
          <FontAwesomeIcon icon={faListAlt} className='ullist' onClick={()=>{setDisplay({...display,list1:true});setPass({...pass,fr:true})}} />
          <span className='tooltip'>Zodiac List</span>
        </nav>
      </header>{" "}
      <Calculator className="calcu" date={date} setDate={setDate} zodiac={zodiac} setZodiac={setZodiac} stateRef={stateRef} display={display} setDisplay={setDisplay} start={start} setStart={setStart} />
      {display.wst ? <Zodiaccard region={"Western"} date={date} setDate={setDate} zodiac={zodiac} setZodiac={setZodiac} stateRef={stateRef} display={display} setDisplay={setDisplay} start={start} setStart={setStart} loveWindow={loveWindow} setLovewnd={setLovewnd} pass={pass} setPass={setPass} /> : "" }
      {display.chn ? <Zodiaccard region={"Chinnese"} date={date} setDate={setDate} zodiac={zodiac} setZodiac={setZodiac} stateRef={stateRef} display={display} setDisplay={setDisplay} start={start} setStart={setStart} loveWindow={loveWindow} setLovewnd={setLovewnd} pass={pass} setPass={setPass} /> : "" }
      {display.list1 ? <Allist date={date} setDate={setDate} zodiac={zodiac} setZodiac={setZodiac} stateRef={stateRef} display={display} setDisplay={setDisplay} start={start} setStart={setStart} loveWindow={loveWindow} setLovewnd={setLovewnd} pass={pass} setPass={setPass} setStart={setStart}/> : ""}
    </div>
  );
}

export default App;

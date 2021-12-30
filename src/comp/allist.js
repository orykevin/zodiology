import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faTimes,faHeart,faInfo} from "@fortawesome/free-solid-svg-icons";
import Listcard from './list-card';
import Zodiaccard from "./zodiaccard.js";

import aries from "../west-zod/aries.png";
import taurus from "../west-zod/taurus.png";
import gemini from "../west-zod/gemini.png";
import cancer from "../west-zod/cancer.png";
import leo from "../west-zod/leo.png";
import virgo from "../west-zod/virgo.png";
import libra from "../west-zod/libra.png";
import scorpio from "../west-zod/scorpio.png";
import sagitarius from "../west-zod/sagittarius.png";
import capricorn from "../west-zod/capricorn.png";
import aquaris from "../west-zod/aquarius.png";
import pisces from "../west-zod/pisces.png";

import monkey from "../chinse-zod/monkey.png";
import rooster from "../chinse-zod/rooster.png"
import dog from "../chinse-zod/dog.png"
import pig from "../chinse-zod/pig.png"
import rat from "../chinse-zod/rat.png"
import ox from "../chinse-zod/ox.png"
import tiger from "../chinse-zod/tiger.png"
import rabbit from "../chinse-zod/rabbit.png"
import dragon from "../chinse-zod/dragon.png"
import snake from "../chinse-zod/snake.png"
import horse from "../chinse-zod/horse.png"
import goat from "../chinse-zod/goat.png"
import { useState } from 'react/cjs/react.development';
import zodiaccard from './zodiaccard';

function allist({date,setDate,zodiac,setZodiac,stateRef,display,setDisplay,region,start,setStart,loveWindow,setLovewnd,pass,setPass}) {
    const [reg,setReg] = useState("Western");

    const [listprop,setProp] =useState({
        wndw:1,
        card:false,
    })

    const selectlistInfo = (zod) =>{
        if(zod === "Aries"){
            return {
                date:"21 March - 19 April ",
                img:aries,
                name:zod
            }
        }else if(zod === "Taurus"){
            return {
                date:"20 April - 20 May ",
                img:taurus,
                name:zod
            };
        }else if(zod === "Gemini"){
            return {
                date:"21 May - 20 June ",
                img:gemini,
                name:zod
            };
        }else if(zod === "Cancer"){
            return {
                date:"21 June - 22 July ",
                img:cancer,
                name:zod
            };
        }else if(zod === "Leo"){
            return {
                date:"23 July - 22 August ",
                img:leo,
                name:zod
            };
        }else if(zod === "Virgo"){
            return {
                date:"23 August - 22 September ",
                img:virgo,
                name:zod
            };
        }else if(zod === "Libra"){
            return {
                date:"23 September - 22 October ",
                img:libra,
                name:zod
            };
        }else if(zod === "Scorpio"){
            return {
                date:"23 October - 21 November ",
                img:scorpio,
                name:zod
            };
        }else if(zod === "Sagitarius"){
            return {
                date:"22 November - 21 December ",
                img:sagitarius,
                name:zod
            };
        }else if(zod === "Capricorn"){
            return {
                date:"22 December - 19 January ",
                img:capricorn,
                name:zod
            };
        }else if(zod === "Aquarius") {
            return {
                date:"20 January - 18 Febuary ",
                img:aquaris,
                name:zod
            };
        }else if (zod === "Pisces"){
            return {
                date:"19 Febuary - 20 March ",
                img:pisces,
                name:zod
            };
        }else if(zod === "Rat"){
            return {
                date:"1960, 1972,..., 2008, 2020",
                img :rat,
                name:zod
            };
        }else if(zod === "Ox"){
            return {
                date:"1961, 1973,..., 2009, 2021",
                img:ox,
                name:zod
            };  
        }else if(zod === "Tiger"){
            return {
                date:"1962, 1974,..., 2010, 2022",
                img:tiger,
                name:zod
            };
        }else if(zod === "Rabbit"){
            return {
                date:"1963, 1975,..., 2011, 2023",
                img:rabbit,
                name:zod
            };
        }else if(zod === "Dragon"){
            return {
                date:"1964, 1976,..., 2012, 2024",
                img:dragon,
                name:zod
            };
        }else if(zod === "Snake"){
            return {
                date:"1965, 1977,..., 2013, 2025",
                img:snake,
                name:zod
            };
        }else if(zod === "Horse"){
            return {
                date:"1966, 1978,..., 2014, 2026",
                img:horse,
                name:zod
            };
        }else if(zod === "Goat"){
            return {
                date:"1967, 1979,...,2015 ,2027",
                img:goat,
                name:zod
            };
        }else if(zod === "Monkey"){
            return {
                date:"1968, 1980,..., 2016, 2028",
                img:monkey,
                name:zod
            };
        }else if(zod === "Rooster"){
            return {
                date:"1969, 1981,..., 2017 ,2029",
                img:rooster,
                name:zod
            };
        }else if(zod === "Dog") {
            return {
                date:"1970, 1982,..., 2018, 2030",
                img:dog,
                name:zod
            };
        }else if (zod === "Pig"){
            return {
                date:"1971, 1983,..., 2019, 2031",
                img:pig,
                name:zod
            };
        }
    }
    /*------------------- calcu function --------------------*/
    const totalDays = () => {
        console.log("total days running");
        if(date.month === 1){
          //setAnswer({...answer,totalday:0+date.day});
          stateRef.current = 0+date.day;
        }else if(date.month === 2){
          //setAnswer({...answer,totalday:31+date.day});
          stateRef.current = 31+date.day;
        }else if(date.month === 3){
          //setAnswer({...answer,totalday:60+date.day});
          stateRef.current = 60+date.day;
        }else if(date.month === 4){
          //setAnswer({...answer,totalday:91+date.day});
          stateRef.current = 91+date.day;
        }else if(date.month === 5){
          //setAnswer({...answer,totalday:121+date.day});
          stateRef.current = 121+date.day;
        }else if(date.month === 6){
          //setAnswer({...answer,totalday:152+date.day});
          stateRef.current = 152+date.day;
        }else if(date.month === 7){
          //setAnswer({...answer,totalday:182+date.day});
          stateRef.current = 182+date.day;
        }else if(date.month === 8){
          //setAnswer({...answer,totalday:213+date.day});
          stateRef.current = 213+date.day;
        }else if(date.month === 9){
          //setAnswer({...answer,totalday:244+date.day});
          stateRef.current = 244+date.day;
        }else if(date.month === 10){
          //setAnswer({...answer,totalday:274+date.day});
          stateRef.current = 274+date.day;
        }else if(date.month === 11){
          //setAnswer({...answer,totalday:305+date.day});
          stateRef.current = 305+date.day;
        }else if(date.month === 12){
          //setAnswer({...answer,totalday:335+date.day});
          stateRef.current = 335+date.day;
        }else{
          console.log("input Month");
        }};
      const westZodiac =() => {
        if(stateRef.current > 80 && stateRef.current < 111 ){
          return "Aries";
        }else if(stateRef.current > 110 && stateRef.current < 142 ){
          return "Taurus";
        }else if(stateRef.current > 141 && stateRef.current < 173 ){
          return "Gemini";
        }else if(stateRef.current > 172 && stateRef.current < 205 ){
          return "Cancer";
        }else if(stateRef.current > 204 && stateRef.current < 236 ){
          return "Leo";
        }else if(stateRef.current > 235 && stateRef.current < 266 ){
          return "Virgo";
        }else if(stateRef.current > 266 && stateRef.current < 297 ){
          return "Libra";
        }else if(stateRef.current > 296 && stateRef.current < 327 ){
          return "Scorpio";
        }else if(stateRef.current > 326 && stateRef.current < 357 ){
          return "Sagitarius";
        }else if(stateRef.current > 356 && stateRef.current < 367 ){
          return "Capricorn";
        }else if(stateRef.current > 0 && stateRef.current < 20 ){
          return "Capricorn";
        }else if(stateRef.current > 19 && stateRef.current < 50 ){
          return"Aquarius";
        }else if(stateRef.current > 49 && stateRef.current < 81 ){
          return"Pisces";
        }
      }
      const chinsZodiac = () =>{
        if (date.year % 12 === 0){
          return "Monkey";
        }else if(date.year % 12 === 1) {
          return"Rooster"
        }else if(date.year % 12 === 2) {
          return"Dog"
        }else if(date.year % 12 === 3) {
          return"Pig"
        }else if(date.year % 12 === 4) {
          return"Rat"
        }else if(date.year % 12 === 5) {
          return"Ox"
        }else if(date.year % 12 === 6) {
          return"Tiger"
        }else if(date.year % 12 === 7) {
          return"Rabbit"
        }else if(date.year % 12 === 8) {
          return"Dragon"
        }else if(date.year % 12 === 9) {
          return"Snake"
        }else if(date.year % 12 === 10) {
          return"Horse"
        }else if(date.year % 12 === 11) {
          return"Goat"
        }
      };
      const elmntZod = () => {
        if(date.year % 2 === 0){
          if(date.year % 5 === 1){
            return "Fire";
          }else if(date.year % 5 === 4){
            return "Wood";
          }else if(date.year % 5 === 3){
            return "Earth";
          }else if(date.year % 5 === 0){
            return "Metal";
          }else if(date.year % 5 === 2){
            return "Water";
          }
        }else if(date.year % 2 === 1){
          if(date.year % 5 === 2){
            return "Fire";
          }else if(date.year % 5 === 0){
            return "Wood";
          }else if(date.year % 5 === 4){
            return "Earth";
          }else if(date.year % 5 === 1){
            return "Metal";
          }else if(date.year % 5 === 3){
            return "Water";
          }
        }
      }
      const generate1 =()=> {
        totalDays();
        setZodiac({
          ...zodiac,
          czod:chinsZodiac(),
          wzod:westZodiac(),
          elmczod:elmntZod(),
        });
      }
    /*------------------- calcu function --------------------*/

    const selectReg = () =>{
        listprop.wndw === 1 ? setProp({wndw:2,card:false}): setProp({wndw:1,card:false});
        listprop.wndw === 1 ? setReg("Chinnese") : setReg("Western");
        setLovewnd(false);

    }

    return (
        <div className={`allist-cont ${listprop.wndw === 1  ? "west" : listprop.wndw === 2  ? "chins" : ""}`}>
            {listprop.card && !loveWindow ? <FontAwesomeIcon icon={faTimes} className='back-card-btn' onClick={()=>setProp({...listprop,card:false})}/> : "" }
            {listprop.card && pass.sc && !loveWindow ? <FontAwesomeIcon icon={faInfo}  className='list-select-btn info-btn' onClick={()=> pass.sc ? setPass({fr:true,sc:false}) : ""}/> : ""}
            {listprop.card && pass.fr && !loveWindow ? <FontAwesomeIcon icon={faHeart} className='list-select-btn ' onClick={()=> pass.fr ? setPass({fr:false,sc:true}) : ""} /> : ""}
            <div className='list-nav'>
            <FontAwesomeIcon icon={faChevronLeft} className='list-back' size='lg' onClick={()=>{setDisplay({...display,list1:false});setPass({fr:false,sc:false});setStart({start1:false,start2:false,startl1:false,startl2:false});generate1()}} />
            <h1>All {listprop.wndw === 1 ? "Western" : listprop.wndw === 2 ? "Chinnese" : ""} Zodiac</h1>
            <h3 onClick={()=> selectReg()}>{listprop.wndw === 2 ? "Western Zodiac" : listprop.wndw === 1 ? "Chinnese Zodiac" : ""}</h3>
            </div>
            <div className={`west-list ${listprop.wndw === 1 && !listprop.card ? "" : "hide"}`}>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Taurus")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Gemini")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Aries")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Cancer")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Leo")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Virgo")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Libra")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Scorpio")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Sagitarius")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Capricorn")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Aquarius")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Western"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Pisces")}/>
            </div>
            <div className={`chins-list ${listprop.wndw === 2 && !listprop.card ? "" : "hide"}`}>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Rat")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Ox")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Tiger")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Rabbit")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Dragon")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Snake")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Horse")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Goat")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Monkey")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Rooster")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Dog")}/>
                <Listcard zodiac={zodiac} setZodiac={setZodiac} region={"Chinnese"} reg={reg} setReg={setReg} listprop={listprop} setProp={setProp} pass={pass} setPass={setPass} zodinfo={selectlistInfo("Pig")}/>
            </div>
            {listprop.card ? <Zodiaccard region={reg} date={date} setDate={setDate} zodiac={zodiac} setZodiac={setZodiac} stateRef={stateRef} display={display} setDisplay={setDisplay} start={start} setStart={setStart} pass={pass} loveWindow={loveWindow} setLovewnd={setLovewnd}/> : ""}
        </div>
    )
}

export default allist

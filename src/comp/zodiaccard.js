import React from 'react'
import { useState, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AnimateHeight from 'react-animate-height';
import testrating from "./compcal";
import ratingwinfo from "./ratingw";

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

import Zodiacinfo from './zodiacinfo';
import Zodiaclove from "./zodiaclove";
import Zodiaccomp from "./lovecomp.js";


function Zodiaccard({date,setDate,zodiac,setZodiac,stateRef,region,start,setStart,pass,loveWindow,setLovewnd}) {
    const [tabOpen,setTab] = useState({
        tab : 0,
        window: false,
    })
    const [toggle,setToggle] = useState({
        toggle:false,
    })
    const windowSet1 = () => {
        start.start1 ? setStart({...start,start1:false}) : setStart({...start,start1:true});
    }
    const windowSet2 = () => {
        start.start2 ? setStart({...start,start2:false}) : setStart({...start,start2:true});
    }
    const checkStart = () => {
        if (confirmRegion()){
            return start.start1
        }else{
            return start.start2
        }
    }
    const checkStartl = () => {
        if (confirmRegion()){
            return start.startl1;
        }else{
            return start.startl2;
        }
    }
    const tabClick = () => {
        tabOpen.window && checkStart() ? setTab({...tabOpen,window:false}) : setTab({...tabOpen,window:true});
        confirmRegion() ? windowSet1() : windowSet2();
        tabOpen.window && checkStart() ? setToggle({toggle:false}) : setToggle({toggle:true});
    }
    const confirmRegion = () => {
        if (region === "Western"){
            return true;
        }else{
            return false;
        }
    }
    const [compInfo,setCompInfo] = useState({
        name:zodiac.wzod,
        img:aries,
        coupname:"",
        coupimg:aries,
    });

    const [rating,setRating] =useState(0)
    const [compwindow,setCompwindow] = useState(false);
    const compFunc = (zod) =>{
        confirmRegion() ? setStart({...start,startl1:true}) : setStart({...start,startl2:true});
        if(zod === "Aries"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:aries,
            })
        }else if (zod === "Taurus"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:taurus,
            })
        }else if (zod === "Gemini"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:gemini,
            })
        }else if (zod === "Cancer"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:cancer,
            })
        }else if (zod === "Leo"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:leo,
            })
        }else if (zod === "Virgo"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:virgo,
            })
        }else if (zod === "Libra"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:libra,
            })
        }else if (zod === "Scorpio"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:scorpio,
            })
        }else if (zod === "Sagitarius"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:sagitarius,
            })
        }else if (zod === "Capricorn"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:capricorn,
            })
        }else if (zod === "Aquarius"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:aquaris,
            })
        }else if (zod === "Pisces"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:pisces,
            })
        }else if (zod === "Rat"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:rat,
            })
        }else if (zod === "Ox"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:ox,
            })
        }else if (zod === "Tiger"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:tiger,
            })
        }else if (zod === "Rabbit"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:rabbit,
            })
        }else if (zod === "Dragon"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:dragon,
            })
        }else if (zod === "Snake"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:snake,
            })
        }else if (zod === "Horse"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:horse,
            })
        }else if (zod === "Goat"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:goat,
            })
        }else if (zod === "Monkey"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:monkey,
            })
        }else if (zod === "Rooster"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:rooster,
            })
        }else if (zod === "Dog"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:dog,
            })
        }else if (zod === "Pig"){
            setCompInfo({
                name:confirmRegion() ? zodiac.wzod : zodiac.czod,
                img:confirmRegion() ? selectwImg() : selectcImg(),
                coupname:zod,
                coupimg:pig,
            })
        }
    }

    const selectComp = (zod) =>{
        setCompwindow(true);
        compFunc(zod);
        setRating(confirmRegion() ? ratingwinfo(testrating(confirmRegion() ? zodiac.wzod : zodiac.czod , zod)).scorew : ratingwinfo(testrating(confirmRegion() ? zodiac.wzod : zodiac.czod , zod)).scorec);
        setLovewnd(true);
    }
    const selectwImg = () => {
        if(zodiac.wzod === "Aries"){
            return aries;
        }else if(zodiac.wzod === "Taurus"){
            return taurus;
        }else if(zodiac.wzod === "Gemini"){
            return gemini;
        }else if(zodiac.wzod === "Cancer"){
            return cancer;
        }else if(zodiac.wzod === "Leo"){
            return leo;
        }else if(zodiac.wzod === "Virgo"){
            return virgo;
        }else if(zodiac.wzod === "Libra"){
            return libra;
        }else if(zodiac.wzod === "Scorpio"){
            return scorpio;
        }else if(zodiac.wzod === "Sagitarius"){
            return sagitarius;
        }else if(zodiac.wzod === "Capricorn"){
            return capricorn;
        }else if(zodiac.wzod === "Aquarius") {
            return aquaris;
        }else{
            return pisces;
        }
    }
    const selectcImg = () => {
        if(zodiac.czod === "Monkey"){
            return monkey;
        }else if(zodiac.czod === "Rooster"){
            return rooster;
        }else if(zodiac.czod === "Dog"){
            return dog;
        }else if(zodiac.czod === "Pig"){
            return pig;
        }else if(zodiac.czod === "Rat"){
            return rat;
        }else if(zodiac.czod === "Ox"){
            return ox;
        }else if(zodiac.czod === "Tiger"){
            return tiger;
        }else if(zodiac.czod === "Rabbit"){
            return rabbit;
        }else if(zodiac.czod === "Dragon"){
            return dragon;
        }else if(zodiac.czod === "Snake"){
            return snake;
        }else if(zodiac.czod === "Horse"){
            return horse;
        }else if(zodiac.czod === "Goat") {
            return goat;
        }
    }
    const selectcDate = () =>{
        if(zodiac.czod === "Rat"){
            return {
                date:"1960, 1972,..., 2008, 2020",
                symbol:"Rat",
                elmnt: zodiac.elmczod,
                sprtc:"Gold",
                luckn:"2, 3",
                luckd:"Lily, Violet",
                proff:"Artist, Café Owner, Photographer",
            };
        }else if(zodiac.czod === "Ox"){
            return {
                date:"1961, 1973,..., 2009, 2021",
                symbol:"Ox",
                elmnt:zodiac.elmczod,
                sprtc:"Blue",
                luckn:"1, 4",
                luckd:"Tulip, Evergreen",
                proff:"Lawyer, Doctor, Politician",
            };
        }else if(zodiac.czod === "Tiger"){
            return {
                date:"1962, 1974,..., 2010, 2022",
                symbol:"Tiger",
                elmnt:zodiac.elmczod,
                sprtc:"Orange",
                luckn:"1, 3",
                luckd:"Cineraria, Anthurium",
                proff:"Banker, Economist, Police Officer",
            };
        }else if(zodiac.czod === "Rabbit"){
            return {
                date:"1963, 1975,..., 2011, 2023",
                symbol:"Rabbit",
                elmnt:zodiac.elmczod,
                sprtc:"Pink",
                luckn:"3, 4",
                luckd:"Snapdragon, Lily",
                proff:"Breeder, Gardener, Judge",
            };
        }else if(zodiac.czod === "Dragon"){
            return {
                date:"1964, 1976,..., 2012, 2024",
                symbol:"Dragon",
                elmnt:zodiac.elmczod,
                sprtc:"Silver",
                luckn:"1, 6",
                luckd:"Lakspur, Hyacinth",
                proff:"Salesman, Pharmacist, Designer",
            };
        }else if(zodiac.czod === "Snake"){
            return {
                date:"1965, 1977,..., 2013, 2025",
                symbol:"Snake",
                elmnt:zodiac.elmczod,
                sprtc:"Yellow",
                luckn:"2, 8",
                luckd:"Orchid, Cactus",
                proff:"Teacher, Painter, Psychologist",
            };
        }else if(zodiac.czod === "Horse"){
            return {
                date:"1966, 1978,..., 2014, 2026",
                symbol:"Horse",
                elmnt:zodiac.elmczod,
                sprtc:"Purple",
                luckn:"3, 7",
                luckd:"Jasmine, Marigold",
                proff:"Writers, Architects, Businessmen",
            };
        }else if(zodiac.czod === "Goat"){
            return {
                date:"1967, 1979,...,2015 ,2027",
                symbol:"Goat",
                elmnt:zodiac.elmczod,
                sprtc:"Red",
                luckn:"2, 7",
                luckd:"Carnation, Primrose",
                proff:"Editor, Musicians, Makeup Artist",
            };
        }else if(zodiac.czod === "Monkey"){
            return {
                date:"1968, 1980,..., 2016, 2028",
                symbol:"Monkey",
                elmnt:zodiac.elmczod,
                sprtc:"White",
                luckn:"4, 9",
                luckd:"Chrysanthemum",
                proff:"Diplomat, Journalist, Entartainers",
            };
        }else if(zodiac.czod === "Rooster"){
            return {
                date:"1969, 1981,..., 2017 ,2029",
                symbol:"Rooster",
                elmnt:zodiac.elmczod,
                sprtc:"Brown",
                luckn:"5, 7",
                luckd:"Gladiola, Cockscomb",
                proff:"Public Speaker, Actors, Comedians",
            };
        }else if(zodiac.czod === "Dog") {
            return {
                date:"1970, 1982,..., 2018, 2030",
                symbol:"Dog",
                elmnt:zodiac.elmczod,
                sprtc:"Green",
                luckn:"3, 4",
                luckd:"Rose, Orchids",
                proff:"Programmers, Bloggers, Lawyers",
            };
        }else{
            return {
                date:"1971, 1983,..., 2019, 2031",
                symbol:"Pig",
                elmnt:zodiac.elmczod,
                sprtc:"Gray",
                luckn:"2, 5",
                luckd:"Hydrangea, Margurite",
                proff:"Teacher, Doctor, Civil Servants",
            };
        }
    }
    const selectwDate = () =>{
        if(zodiac.wzod === "Aries"){
            return {
                date:"21 March - 19 April ",
                symbol:"Ram",
                elmnt:"Fire",
                sprtc:"Red",
                luckn:"9, 6",
                luckd:"Tuesday, Saturday",
                proff:"Doctor, Engineers, Bankers",
            };
        }else if(zodiac.wzod === "Taurus"){
            return {
                date:"20 April - 20 May ",
                symbol:"Bull",
                elmnt:"Earth",
                sprtc:"Pink",
                luckn:"6, 5",
                luckd:"Monday, Friday",
                proff:"Chef, Politician, Architect",
            };
        }else if(zodiac.wzod === "Gemini"){
            return {
                date:"21 May - 20 June ",
                symbol:"The Twins",
                elmnt:"Air",
                sprtc:"Yellow",
                luckn:"5, 6",
                luckd:"Monday, Wednesday",
                proff:"Teacher, Actor, Designer",
            };
        }else if(zodiac.wzod === "Cancer"){
            return {
                date:"21 June - 22 July ",
                symbol:"Crab",
                elmnt:"Water",
                sprtc:"Violet",
                luckn:"2, 7",
                luckd:"Tuesday, Friday",
                proff:"HR Executive, Social Worker, Nurse",
            };
        }else if(zodiac.wzod === "Leo"){
            return {
                date:"23 July - 22 August ",
                symbol:"Lion",
                elmnt:"Fire",
                sprtc:"Gold",
                luckn:"1, 5",
                luckd:"Tuesday, Sunday",
                proff:"Surgeon, Enterpreneur, Director",
            };
        }else if(zodiac.wzod === "Virgo"){
            return {
                date:"23 August - 22 September ",
                symbol:"The Virgin",
                elmnt:"Earth",
                sprtc:"Silver",
                luckn:"2, 6",
                luckd:"Monday, Wednesday",
                proff:"Proffessor, Entrepreneur, Director",
            };
        }else if(zodiac.wzod === "Libra"){
            return {
                date:"23 September - 22 October ",
                symbol:"The Scales",
                elmnt:"Air",
                sprtc:"Blue",
                luckn:"5, 9",
                luckd:"Sunday, Monday",
                proff:"Writer , Psychologist, Salesman",
            };
        }else if(zodiac.wzod === "Scorpio"){
            return {
                date:"23 October - 21 November ",
                symbol:"Scorpion",
                elmnt:"Water",
                sprtc:"Black",
                luckn:"1, 4",
                luckd:"Tuesday, Thursday",
                proff:"Barber, Tech Enterpreneur, Spy",
            };
        }else if(zodiac.wzod === "Sagitarius"){
            return {
                date:"22 November - 21 December ",
                symbol:"The Archer",
                elmnt:"Fire",
                sprtc:"Light Blue",
                luckn:"6, 8",
                luckd:"Wednesday, Friday",
                proff:"Marketing, Editor, Proffessor",
            };
        }else if(zodiac.wzod === "Capricorn"){
            return {
                date:"22 December - 19 January ",
                symbol:"Goat",
                elmnt:"Earth",
                sprtc:"Dark Blue",
                luckn:"9, 8",
                luckd:"Friday, Saturday",
                proff:"Lawyer, CEO, Architect",
            };
        }else if(zodiac.wzod === "Aquarius") {
            return {
                date:"20 January - 18 Febuary ",
                symbol:"Water Bearer",
                elmnt:"Air",
                sprtc:"Sky Blue",
                luckn:"2, 3",
                luckd:"Thursday, Friday",
                proff:"Traders, Singer, Product Manager",
            };
        }else{
            return {
                date:"19 Febuary - 20 March ",
                symbol:"Fish",
                elmnt:"Water",
                sprtc:"Green",
                luckn:"3, 7",
                luckd:"Thursday, Tuesday",
                proff:"Sailor, Pharmacist, Filmmaker",
            };
        }
    }
    return (
        <div className={pass.fr || pass.sc ? "zod-card" : "zod-card-without"}>
            <h1 className={`card-header ${confirmRegion() ? "west-head" : "chins-head"}`}>Your {region} Zodiac</h1>
            <div className={`card-info ${confirmRegion() ? "west-card" : "chins-card"} ${toggle.toggle && checkStart() ? "windopen" : "windclose"} `}>
                <div className="zodiac-info">
                    <div className={`frame-zod ${confirmRegion() ? "west-frame" : "chins-frame"}`}>
                    {confirmRegion() ? <img src={selectwImg()} alt="" /> : <img src={selectcImg()} alt="" />}
                    </div>
                    {confirmRegion() ? <h3 className="name-card">{zodiac.wzod}</h3> : <h3 className="name-card">{zodiac.czod}</h3>}
                    {confirmRegion() ? <h4 className="date-card">{selectwDate().date}</h4> : <h4 className="date-card">{selectcDate().date}</h4>}
                </div>
                <select name="" id="" className={`about-select ${(tabOpen.window && checkStart()) ? "" : "hide"}`} onChange={e => setTab({...tabOpen,tab:parseInt(e.target.value)})}>
                    <option value="0">About {confirmRegion() ? zodiac.wzod : zodiac.czod}</option>
                    <option value="1">{confirmRegion() ? zodiac.wzod : zodiac.czod} Love Compability </option>
                </select>
                {tabOpen.tab === 0 && tabOpen.window && (confirmRegion()  ? start.start1 : start.start2) || pass.fr  ? <Zodiacinfo confirmRegion={confirmRegion} zodiac={zodiac} selectcDate={selectcDate} selectwDate={selectwDate} /> : ""}
                {tabOpen.tab === 1 && tabOpen.window && (checkStart()) || pass.sc ? <Zodiaclove confirmRegion={confirmRegion} zodiac={zodiac} setCompwindow={setCompwindow} selectComp={selectComp} /> : ""}
                {compwindow && checkStartl() ? <Zodiaccomp compwindow={compwindow} setCompwindow={setCompwindow} zodiac={zodiac} confirmRegion={confirmRegion} compInfo={compInfo} rating={rating} checkStart={checkStart} loveWindow={loveWindow} setLovewnd={setLovewnd} /> : ""}
                {pass.fr || pass.sc ? "" : <FontAwesomeIcon icon={faCaretDown} className={`dropbtn ${tabOpen.window && checkStart() ? "dropanim" :"upanim"}`} onClick={()=>tabOpen.window && (start.start1 || start.start2) ? tabClick() : tabClick()} size='2x'/>}
                {pass.fr || pass.sc ? <div className='padding-list'></div> : ""}
            </div>
        </div>
    )
}

export default Zodiaccard

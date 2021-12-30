import React from 'react'
import fullove from "../ico/love-1.svg"
import halflove from "../ico/love-2.svg"
import lovelogo from "../ico/love-wht.svg"
import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function lovecomp({compwindow,setCompwindow,zodiac,confirmRegion,compInfo,rating,checkStart,loveWindow,setLovewnd}) {
    const closeAll = () =>{
        setCompwindow(false);
        setLovewnd(false);
    }
    return (
        <div className={`comp-cont ${confirmRegion() ? "west-card" : "chins-card"}`}>
            <div className='back-cont'>
            <FontAwesomeIcon icon={faChevronLeft} className="back-btn" onClick={()=>compwindow ? closeAll():""} />
            </div>
            <h3>{compInfo.name} with {compInfo.coupname}</h3>
            <div className="comp-ico-cont">
                <div className={`comp-img ${confirmRegion() ? "west-comp" : "chins-comp"}`}>
                    <img src={compInfo.img} alt="" />
                </div>
                <h4>{compInfo.name}</h4>
                <img src={lovelogo} alt="" className="love-ico" />
                <div className='gap-cont'></div>
                <div className={`comp-img ${confirmRegion() ? "west-comp" : "chins-comp"}`}>
                <img src={compInfo.coupimg} alt="" />
                </div>
                <h4>{compInfo.coupname}</h4>
            </div>
            <div className="love-rating">
                <img src={fullove} alt="" style={{animationDelay:"100ms"}}  />
                <img src={fullove} alt="" style={{animationDelay:"150ms"}}  />
                <img src={fullove} alt="" style={{animationDelay:"200ms"}} />
                <img src={fullove} alt="" style={{animationDelay:"250ms"}}  />
                {rating >= 5  ? <img src={fullove} alt="" style={{animationDelay:"300ms"}}/> : <img src={halflove} alt="" style={{animationDelay:"300ms"}}/>}
                {rating >= 6  ? <img src={fullove} alt="" style={{animationDelay:"350ms"}}/> : <img src={halflove} alt="" style={{animationDelay:"350ms"}}/>}
                {rating >= 7  ? <img src={fullove} alt="" style={{animationDelay:"400ms"}}/> : <img src={halflove} alt="" style={{animationDelay:"400ms"}}/>}
                {rating >= 8  ? <img src={fullove} alt="" style={{animationDelay:"450ms"}}/> : <img src={halflove} alt="" style={{animationDelay:"450ms"}}/>}
                {rating >= 9  ? <img src={fullove} alt="" style={{animationDelay:"500ms"}}/> : <img src={halflove} alt="" style={{animationDelay:"500ms"}}/>}
                {rating >= 10  ? <img src={fullove} alt="" style={{animationDelay:"550ms"}}/> : <img src={halflove} alt="" style={{animationDelay:"550ms"}}/>}
                

            </div>
            <h2>{rating}/10</h2>
        </div>
    )
}

export default lovecomp

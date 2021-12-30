import React from 'react'
import pisces from "../west-zod/pisces.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function listcard({zodinfo,zodiac,setZodiac,reg,setReg,listprop,setProp,pass,setPass}) {
    const setListZod = (zod) =>{
        setZodiac({
            ...zodiac,
            /*wzod:(reg === "Western" ? zod : "" ),
            czod:(reg === "Chinnese" ? zod : "" ),*/
            ...(reg === "Western" ? {wzod:zod} : ""),
            ...(reg === "Chinnese" ? {czod:zod} : ""),
            ...(reg === "Chinnese" ? {elmczod:"-"} : ""),
        });
        setProp({
            ...listprop,
            card:true,
        })
    }
    return (
        <div className='list-contain'>
            <span className={"list-img-cont"}>
                <img src={zodinfo.img} alt="" />
            </span>
            <div className='list-info-cont'>
                <h2>{zodinfo.name}</h2>
                <h3>{zodinfo.date}</h3>
            </div>
            <FontAwesomeIcon icon={faCaretRight} size={'2x'} className={'carretright'} onClick={()=>{setListZod(zodinfo.name)}} />
        </div>
    )
}

export default listcard

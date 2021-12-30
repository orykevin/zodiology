import React from 'react'

function zodiaclove({confirmRegion,zodiac,setCompwindow,selectComp}) {
    return (
    <div>
        {confirmRegion() ? <div className={`love-cont`}>
            <div className="love-btn" onClick={()=>selectComp("Aries")}>Aries</div>
            <div className="love-btn" onClick={()=>selectComp("Taurus")}>Taurus</div>
            <div className="love-btn" onClick={()=>selectComp("Gemini")}>Gemini</div>
            <div className="love-btn" onClick={()=>selectComp("Cancer")}>Cancer</div>
            <div className="love-btn" onClick={()=>selectComp("Leo")}>Leo</div>
            <div className="love-btn" onClick={()=>selectComp("Virgo")}>Virgo</div>
            <div className="love-btn" onClick={()=>selectComp("Libra")}>Libra</div>
            <div className="love-btn" onClick={()=>selectComp("Scorpio")}>Scorpio</div>
            <div className="love-btn" onClick={()=>selectComp("Sagitarius")}>Sagitarius</div>
            <div className="love-btn" onClick={()=>selectComp("Capricorn")}>Capricorn</div>
            <div className="love-btn" onClick={()=>selectComp("Aquarius")}>Aquarius</div>
            <div className="love-btn" onClick={()=>selectComp("Pisces")}>Pisces</div>
        </div> :
        <div className={`love-cont`}>
            <div className="love-btn" onClick={()=>selectComp("Rat")} >Rat</div>
            <div className="love-btn" onClick={()=>selectComp("Ox")} >Ox</div>
            <div className="love-btn" onClick={()=>selectComp("Tiger")} >Tiger</div>
            <div className="love-btn" onClick={()=>selectComp("Rabbit")} >Rabbit</div>
            <div className="love-btn" onClick={()=>selectComp("Dragon")} >Dragon</div>
            <div className="love-btn" onClick={()=>selectComp("Snake")} >Snake</div>
            <div className="love-btn" onClick={()=>selectComp("Horse")} >Horse</div>
            <div className="love-btn" onClick={()=>selectComp("Goat")} >Goat</div>
            <div className="love-btn" onClick={()=>selectComp("Monkey")} >Monkey</div>
            <div className="love-btn" onClick={()=>selectComp("Rooster")} >Rooster</div>
            <div className="love-btn" onClick={()=>selectComp("Dog")} >Dog</div>
            <div className="love-btn" onClick={()=>selectComp("Pig")} >Pig</div>
        </div>}
    </div>
    )
}
export default zodiaclove

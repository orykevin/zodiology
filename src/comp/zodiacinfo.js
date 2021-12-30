import React from 'react'

function zodiacinfo({confirmRegion,zodiac,selectcDate,selectwDate}) {
    return (
        <div className="info-cont">
            <div className="about-1">
                <h6>Symbol</h6>
                <span>:</span>
                <p>{confirmRegion() ? selectwDate().symbol : selectcDate().symbol}</p>
            </div>
            <div className="about-1">
                <h6>Element</h6>
                <span>:</span>
                <p>{confirmRegion() ? selectwDate().elmnt : selectcDate().elmnt}</p>
            </div>
            <div className="about-1">
                <h6>Spirit Colour</h6>
                <span>:</span>
                <p>{confirmRegion() ? selectwDate().sprtc : selectcDate().sprtc}</p>
            </div>
            <div className="about-1">
                <h6>Lucky Number</h6>
                <span>:</span>
                <p>{confirmRegion() ? selectwDate().luckn : selectcDate().luckn}</p>
            </div>
            <div className="about-1">
                {confirmRegion() ? <h6>Lucky Days</h6> : <h6>Lucky Flower</h6>}
                <span>:</span>
                <p>{confirmRegion() ? selectwDate().luckd : selectcDate().luckd}</p>
            </div>
            <div className="about-1">
                <h6>Best Proffesion</h6>
                <span>:</span>
                <p>{confirmRegion() ? selectwDate().proff : selectcDate().proff}</p>
            </div>
        </div>
    )
}

export default zodiacinfo

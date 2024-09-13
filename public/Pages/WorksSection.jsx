import React from "react"
import WorksImage from "./WorksImage"
import BtnInicio from "./BtnInicio"

export default function WorksSection(){ 
   const images = Array.from({length: 20}, (_, index) => index + 1)
    return (
        <div className="works-box">
            <div className="works-title">
                <h2 className="cssanimation typing">Trabalhos!!</h2>
            </div>
            <div className="photos-container cssanimation fadeIn">
                <div className="photos">
                    {images.map(id => (
                        <WorksImage key={id} idImage={id}/>
                    ))}     
                </div>
            </div>
           <BtnInicio/>
        </div>
    )
}
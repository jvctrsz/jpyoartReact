import React from "react"
export default function ContactsPhoto(props) {
    return (
        <div className="photo-tutorial">
            <div className="image-tutorial">
                <div className="img-tuto">
                    <img src={`./styles/images/imagem-tutorial-${props.Num}.png`} alt="" style={{ width: '300px' }} />
                </div>
            </div>
        </div>
    )
}
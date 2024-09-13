import React from "react"

function Menu(){
    return (
        <div className="menu">
            <div className="menuList animate__animated animate__fadeIn">
                <button className="list">Sobre Mim</button>
                <button className="list">Trabalhos</button>
                <button className="list">Contatos</button>
            </div>
        </div>
    )
}

export default Menu

// onclick={aboutMenu()}
// onclick={worksMenu()}
// onclick={contactMenu()}
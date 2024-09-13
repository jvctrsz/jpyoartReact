export default function WorksImage(props){
    return(
        <div className="image">
            <a href={`../images/work-images/image-${props.idImage}.jpg`} target="_blank" rel="imagem do portfolio">
            <img src={`../images/work-images/image-${props.idImage}.jpg`} alt="" />
            </a>
            </div>
    )
}
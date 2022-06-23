function Card(props) {
    return (
        <div className="card">
            <img className="card-img"
            src={`../resources/images/${props.photoImg}`} 
            />
            <h1 className="card-location">{props.location}</h1>
            <h1 clasName="card-name">{props.name}</h1>
            <h1 className="card-date">{props.dates}</h1>
            <h1 className="card-description">{props.description}</h1>
        </div>
    )
}

export default Card;
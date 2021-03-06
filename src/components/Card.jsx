import Pin from '../resources/images/pin'

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card-img-box">
                <img className="card-img" alt="location"
                src={`https://raxxius.github.io/travel-journal/resources/images/${props.photoImg}`} 
                />
                </div>
                <div className="card-content-box">
                <div className="card-location">
                    <div className='card-location-span'>
                        <a className='google-link-icon' href={props.googlemap} target="blank"><Pin /></a>
                        <h2>{props.location}</h2>
                        <a className='google-link' href={props.googlemap} target="blank">View on Google Maps</a>
                    </div>
                </div>
                <div className="card-name"><h1>{props.name}</h1></div>
                <div className="card-date"><h3>{props.date}</h3></div>
                <div className="card-description"><p>{props.description}</p></div>
                </div>
            </div>
            <hr class="solid"></hr>
        </>
    )
}

export default Card;
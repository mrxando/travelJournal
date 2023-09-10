


function Card(props) {
    console.log(props)

    return (
        <div className='card'>
            <img className='front-img' src={props.imageUrl}/>
            <div className="info">
                <div className="location">{props.location}</div>
                <a href={props.googleMapsUrl} target='_blank' className='google-map-link'>View on Google Maps</a>
            </div>
            <h1 className='card-title'>{props.title}</h1>
            <time>
                <div className="start-date">
                    {props.startDate}
                </div>
                <div className="end-date">
                    {props.endDate}
                </div>
            </time>
            <p className='card-description'>
                {props.description}
            </p>
        </div>
    )
  }
  
  export default Card
  
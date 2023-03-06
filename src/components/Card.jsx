import star from '../images/Star 1.png'


export default function Card(props) {

    let badgetext;

    if (props.openSpots === 0) {
        badgetext = "Sold Out";
    } else {
        badgetext = "Online";
    }

    return (
        <div className="card">
            <div className="card-badge">{badgetext}</div>

            <img src={process.env.PUBLIC_URL + "/images/" + props.data.coverImg} alt="" className='card-img' />

            <div className="card-stats">
                <img src={star} alt="" className="card-rating-icon" />
                <span className="card-rating">{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.reviewCount})</span>
                <span className="gray">{props.data.location}</span>
            </div>
            <p>{props.data.title}</p>
            <p><span className="bold">From ${props.data.price} /</span>person</p>
        </div>
    )
}
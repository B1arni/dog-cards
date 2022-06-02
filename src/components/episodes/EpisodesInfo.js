const EpisodesInfo = (props) => {
    const info = props.info;
    const name = info.map((element) => element.name);
    const airDate = info.map((element) => element.air_date);
    
    return (
        <div className="episode-info-container">
            <ul className="episode-info-list">
                <li className="episode-info">Name: {name[0]}</li>
                <li className="episode-info">Air date: {airDate[0]}</li>
            </ul>
            <ul className="episode-info-list">
                <li className="episode-info">Name: {name[1]}</li>
                <li className="episode-info">Air date: {airDate[1]}</li>
            </ul>
            <ul className="episode-info-list">
                <li className="episode-info">Name: {name[2]}</li>
                <li className="episode-info">Air date: {airDate[2]}</li>
            </ul>
        </div>
    )
}

export default EpisodesInfo;
const LocationsInfo = (props) => {
    const info = props.info;
    const name = info.map((element) => element.name);
    const dimension = info.map((element) => element.dimension);
    const type = info.map((element) => element.type);

    return (
        <div className="location-info-container">
            <ul className="location-info-list">
                <li className="location-info">Name: {name[0]}</li>
                <li className="location-info">Dimension: {dimension[0]}</li>
                <li className="location-info">Type: {type[0]}</li>
            </ul>
            <ul className="location-info-list">
                <li className="location-info">Name: {name[1]}</li>
                <li className="location-info">Dimension: {dimension[1]}</li>
                <li className="location-info">Type: {type[1]}</li>
            </ul>
            <ul className="location-info-list">
                <li className="location-info">Name: {name[2]}</li>
                <li className="location-info">Dimension: {dimension[2]}</li>
                <li className="location-info">Type: {type[2]}</li>
            </ul>
        </div>
    )
}

export default LocationsInfo;


const Description = (props) => {
    const data = props.data;
    const episodesURLArray = data.episode;

                    return (
                        <ul className="description">
                            <li className="description-item">Name: {data.name}</li>
                            <li className="description-item">Species: {data.species}</li>
                            <li className="description-item">Status: {data.status !== "Alive" ? <img className="status-icon" src="https://img.icons8.com/material-rounded/344/skull.png"/> : <img className="status-icon" src="https://cdn-icons-png.flaticon.com/512/2156/2156358.png"/>}</li>
                            <li className="description-item">Location: {data.location.name}</li>
                            <li className="description-item">Type: {data.type}</li>
                            <li className="description-item">Episode: </li>
                        </ul>
                    )
}

export default Description;
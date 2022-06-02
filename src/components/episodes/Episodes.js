import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import setNewInfo from "../../setNewInfo.js";
import EpisodesInfo from "./EpisodesInfo.js";
import './Episodes.css';

const Episodes = () => {
    const episodeInfo = useSelector((info) => info.data);
    const dispatch = useDispatch();

    useEffect(() => {
        setNewInfo(dispatch, 'episode', 50)
    }, [dispatch])

    const changeEpisodeHandler = () => {
        setNewInfo(dispatch, 'episode', 50);
    }

    if (episodeInfo !== null) {
        return (
            <div className="episodes">
                <EpisodesInfo info={episodeInfo} />
                <button className="change-content-button" onClick={changeEpisodeHandler} >Change episodes</button>
            </div>
        )
    }
}

export default Episodes;
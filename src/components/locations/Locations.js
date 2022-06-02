import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import setNewInfo from "../../setNewInfo.js";
import LocationsInfo from "./LocationsInfo.js";
import './Locations.css';

const Locations = () => {
  const locationInfo = useSelector((info) => info.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewInfo(dispatch, `location`, 124);
  }, [dispatch])

  const changeLocationHandler = () => {
    setNewInfo(dispatch, `location`, 124);
  }

    if (locationInfo !== null) {
      return (
        <div className="locations">
          <LocationsInfo info={locationInfo} />
          <button className="change-content-button" onClick={changeLocationHandler}>Change locations</button>
        </div>
      );
    }
}

export default Locations;
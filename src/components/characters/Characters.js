import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import setNewInfo from "../../setNewInfo";
import Alternative from "./Alternative";
import './Characters.css'

const Characters = () => {
  const dispatch = useDispatch();
  const characterInfo = useSelector((info) => info.data)

  useEffect(() => {
    setNewInfo(dispatch, `character`, 824);
  }, [dispatch])

  const changeImagesHandler = () => {
    setNewInfo(dispatch, `character`, 824);
  }

  console.log(characterInfo)

    if (characterInfo !== null) {
      return (
        <div className="characters-page">
          <Alternative />
          <button className="change-content-button" onClick={changeImagesHandler}>Change images</button>
        </div>
      );
    }
}

export default Characters;
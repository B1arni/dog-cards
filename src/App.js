import React, {useState, useEffect} from "react";
import Images from "./Images";
import './App.css';

const rickMortyAPI = `https://rickandmortyapi.com/api/character/`;

const randomizer = () => {
  const arrayID = [];

  for (let i = 0; i < 3; i++) {
    arrayID.push(Math.floor(Math.random() * 825));
  };

  return [...arrayID];
}

const App = () => {
  const [images, setImages] = useState(null);

  async function setNewImages () {
    let response = await fetch(rickMortyAPI + randomizer());
    let data = await response.json();
    await setImages(data);
  };

  function changeImagesHandler() {
    setNewImages();
  }

  useEffect(() => {
    setNewImages();
  }, []);

  if (images !== null) {
    return (
      <div className="app">
        <Images className='images' images={images} />
        <button className="change-image-button" onClick={changeImagesHandler}>Change images</button>
      </div>
    );
  }
}

export default App;
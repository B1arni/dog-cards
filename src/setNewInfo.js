async function setNewInfo (dispatch, division, quantity) {
  const rickMortyAPI = `https://rickandmortyapi.com/api/${division}/`;

  const randomizer = () => {
    const arrayID = [];
      
    for (let i = 0; i < 3; i++) {
        arrayID.push(Math.floor(Math.random() * quantity));
      };
      
      return [...arrayID];
    }

    let response = await fetch(rickMortyAPI + randomizer());
    let data = await response.json();
      await dispatch({
        type: 'SET',
        payload: data
      });
  };
  
export default setNewInfo;


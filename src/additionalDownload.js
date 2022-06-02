function additionalDownload (urlArray, dispatch) {
    urlArray.forEach( async (url) => {
      let response = await fetch(url);
      let data = await response.json();
      let result = await data.name;
      dispatch({
        type: 'ADD_INFO',
        payload: result
      })
    });
}

export default additionalDownload;


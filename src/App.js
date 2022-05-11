import React from "react";
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            card: null
        };
        this.changeImageHandler = this.changeImageHandler.bind(this)
    }

    setImage () {
        return fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data => {
           this.setState({
               card: data.message,
           })
       });
    }

    componentDidMount() {
        this.setImage();
    }

    changeImageHandler() {
        this.setImage();
    }

    render () {
        return (
            <div className="app">
                <img className='image' src={this.state.card}/>
                <button className="button" onClick={this.changeImageHandler}>Change image</button>
            </div>
        )
    }
}

export default App;
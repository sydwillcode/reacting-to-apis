import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => this.setState({ films }))

  }

  render() {


    return (

      this.state.films.map((film) => {
        return (

          <div key={film.id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{film.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{film.director}</h6>
              <p className="card-text">{film.description}</p>
              <a href={film.url} className="card-link">Card link</a>
            </div>
          </div>


        )
      })


    )



  }


}


export default App; 

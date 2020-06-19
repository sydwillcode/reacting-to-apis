import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      vehicles: [],
      isLoaded: false,
      showFilms: false,
      hasVehicle: false
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => this.setState({ films }))

      fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then((vehicles) => this.setState({ vehicles }))

  }



  toggleFilms = () => {
    this.setState({
      isLoaded: true,
      showFilms: true
    })
  }

  toggleVehicles = () => {
    this.setState({
      isLoaded: true,
      hasVehicle: true
    })
  }

  render() {
      if(this.state.isLoaded){
        if(this.state.showFilms){
        return (
          this.state.films.map((film) => {
            return (
    
              <div key={film.id} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{film.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{film.director}</h6>
                  <p className="card-text">{film.description}</p>
                  <a href={film.url} target="_blank" className="card-link">Go to film</a>
                </div>
              </div>
    
    
            )
          })
        )}else if (this.state.hasVehicle){
          return (
            this.state.vehicles.map((vehicle) => {
              return (
      
                <div key={vehicle.id} className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{vehicle.vehicle_class}</h6>
                    <p className="card-text">{vehicle.description}</p>
                    <a href={vehicle.url} target="_blank" className="card-link">Go to Vehicle</a>
                  </div>
                </div>
      
      
              )
            })
          )
        }
      } else {
        return (
          <>
          <button onClick={this.toggleFilms}   className="btn btn-success">Show Films</button>
          <button onClick={this.toggleVehicles}   className="btn btn-success">Show Vehicles</button>
          


          </>
        )
      }

  }




}


export default App; 

import React from 'react'
import axios from 'axios'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: 0,
      longitude: 0,
      radius: 0,
      places: []
    }
  }

  handleChange(event, item) {
    this.setState({[item]: event.target.value})
  }

  getPlaces() {
    axios.get('http://localhost:8070/places/' + this.state.latitude + '/' + this.state.longitude + '/' + this.state.radius).then(response => {
      this.setState({places: response.data})
    }).catch(err => {
      console.log(err.message)
    })
  }

  render() {
    const places = this.state.places

    return (
      <div id="App">
        <h1>Find Nearby Places</h1>
        <div id="Form">
          {['Latitude', 'Longitude', 'Radius'].map((item, index) =>
            <div className="row" key={index}>
              <div className="column">{item}</div>
              <div className="column">
                : <input type="text" value={this.state[item.toLowerCase()]}
                         onChange={event => this.handleChange(event, item.toLowerCase())}/>
              </div>
            </div>
          )}
          <div className="row">
            <span/>
            <input type="button" value="Submit" onClick={() => this.getPlaces()}/>
          </div>
        </div>
        <h2>Places:</h2>
        <div id="Places">
          {places.length > 0 && places.map((place, index) => {
            return (
              <div className="place" key={index}>
                <div className="icon">
                  <img src={place.icon} alt={place.name}/>
                </div>
                <div className="desc">
                  <div className="name">{place.name}</div>
                  <div className="types">{place.types.join(', ')}</div>
                  <div className="vicinity">{place.vicinity}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

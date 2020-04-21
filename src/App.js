import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import React from 'react'

export class MapContainer extends React.Component {
  render() {
    return (
      <div style={{}}>
        <div style={style2}>
          <h4 style={{ margin: '0px' }}>5 cities placed</h4>
        </div>
        <div style={style2}>
          <h4 style={{ margin: '0px' }}>361 kilometers left</h4>
        </div>
        <div style={style3}>
          <h4 style={{ margin: '0px' }}>Select location of</h4>
          <h4 style={{ margin: '0px' }}>"Amsterdam"</h4>
        </div>
        <div style={style4}>
          <Map
            google={this.props.google}
            zoom={3}
            style={style}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807,
            }}
          >
            <Marker onClick={this.onMarkerClick} name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>{/* <h1>{this.state.sel  ectedPlace.name}</h1> */}</div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    )
  }
}
const style = {
  margin: '10px 10px',
  width: '380px',
  height: '480px',
}

const style2 = {
  border: '1px solid black',
  margin: '10px auto',
  backgroundColor: 'grey',
  padding: '0px',
  textAlign: 'center',
  width: '400px',
}

const style3 = {
  margin: '0px auto',
  padding: '0px',
  textAlign: 'center',
  width: '400px',
}

const style4 = {
  border: '1px solid black',
  margin: '0 auto',
  width: '400px',
  height: '500px',
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDugZNUDOlL3Nhwc2Tr82Fn0AuYRQ0QGHc',
})(MapContainer)

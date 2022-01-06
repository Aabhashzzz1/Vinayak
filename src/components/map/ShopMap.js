import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ShopMap extends Component {
  static defaultProps = {
    center: {
      lat: 22.6812000,
      lng: 75.8645000,
      
    },
    zoom: 20,
    
    
  };

  render() {
    return (
      
      <div style={{ height: '80vh', width: '92vh',marginLeft: '58%',marginTop: '7%',}} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDGVf3ybP_DmBzwvoLvOhBiRSRfR4u78Yc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={22.6812000}
            lng={75.8645000}
            text={<span style={{
              height: '11vh',
              width: '11vh',
              backgroundColor: '#28536B',
              color: '#FFFFFF',
              borderRadius: '10%',
              display: 'inline-grid',
              alignContent: 'center',
              fontSize: '14px',
              fontWeight: 600,
              padding: '0 10px 0 5px'
              }}>
              Vinayak Cakes</span>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ShopMap;
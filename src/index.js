import React from "react";
import { render } from "react-dom";
import GoogleMapReact from "google-map-react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCoffee from "@fortawesome/fontawesome-free-solid/faCoffee";

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: -33.824249,
      lng: 151.101347
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "80%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAxY_ciHRGiBOgE5cNRJueGjM30bL1f-fg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={() => console.log("HELLO")}
        >
          <FontAwesomeIcon icon={faCoffee} lat={-33.815048} lng={151.094738} />
        </GoogleMapReact>
      </div>
    );
  }
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <SimpleMap />
  </div>
);

render(<App />, document.getElementById("root"));

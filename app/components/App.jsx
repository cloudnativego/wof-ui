import React from 'react';
import MapActions from '../actions/MapActions';
import MapStore from '../stores/MapStore';
import MapGrid from "./MapGrid";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = MapStore.getState();
}

componentDidMount() {
   MapStore.listen(this.storeChanged);
   MapStore.fetchMap();
 }
 componentWillUnmount() {
   MapStore.unlisten(this.storeChanged);
 }

 storeChanged = (state) => {
   // Without a property initializer `this` wouldn't
   // point at the right context because it defaults to
   // `undefined` in strict mode.
   this.setState(state);
 };

 render() {
    const map = this.state.map;

    if (MapStore.isLoading()) {
      return (
        <div>
          <img src="/ajax-loader.gif" />
        </div>
      )
    }

    if (this.state.errorMessage) {
      return (
        <div>{this.state.errorMessage}</div>
      );
    }

    return (
      <div>        
        <MapGrid map={map} />
      </div>
    );
  }
}

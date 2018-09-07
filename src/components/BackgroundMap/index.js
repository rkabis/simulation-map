import React, { Component } from 'react';
import './index.css'
import { Map, TileLayer } from 'react-leaflet'

const mapboxTiles = process.env.REACT_APP_MAPBOX_TILES
const mapboxAttr =  process.env.REACT_APP_MAPBOX_ATTR
const mapboxId = process.env.REACT_APP_MAPBOX_ID
const mapboxAccess = process.env.REACT_APP_MAPBOX_ACCESS

console.log(mapboxTiles)
const componentStyle = {
	zIndex: 0
}

class BackgroundMap extends Component {
	state = {
		mapCenter: [14.654912, 121.064264],
		zoomLevel: 16,
	}

	render() {
		return (
			<div style={componentStyle}>
				<Map
					center={this.state.mapCenter}
					zoom={this.state.zoomLevel}
					zoomControl={false}
				>
					<TileLayer
						attribution={mapboxAttr}
						url={mapboxTiles}
						id={mapboxId}
						accessToken={mapboxAccess}
					/>
				</Map>
			</div>
		)
	}
}

export default BackgroundMap;
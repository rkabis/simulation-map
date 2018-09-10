import React, { Component } from 'react';
import './index.css'
import { Map, TileLayer } from 'react-leaflet'

const mapboxTiles = process.env.REACT_APP_MAPBOX_TILES
const mapboxAttr =  process.env.REACT_APP_MAPBOX_ATTR
const mapboxId = process.env.REACT_APP_MAPBOX_ID
const mapboxAccess = process.env.REACT_APP_MAPBOX_ACCESS

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


// //Get the interface element for inputting the animation_interval.
// var animation_interval_input = document.getElementById("animation_interval");

// //Set bounds for the area on the map where the simulation will run (gotten from openstreetmap.org).
// var bounding_box = [[39.9058, -86.0910], [39.8992, -86.1017]];

// //Create and setup the Leafvar map object.
// var map = L.map("map").fitBounds(bounding_box).setZoom(16);

// //Get map graphics by adding OpenStreetMap tiles to the map object.
// L.tileLayer(
// 	"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
// 	{
// 		attribution: "Thanks to <a href=\"http://openstreetmap.org\">OpenStreetMap</a> community",
// 		maxZoom: 18,
// 	}
// ).addTo(map);

// //Create an Agentmap.
// var agentmap = L.A.agentmap(map);

// //Do the following on each tick of the simulation once for the whole map.
// agentmap.controller = function() {
// 	ticks_display.textContent = agentmap.state.ticks;
	
// 	var animation_interval = animation_interval_map[animation_interval_input.value];

// 	//Check if the animation interval slider's value has changed and update the agentmap.animation_interval accordingly.
// 	if (animation_interval !== this.animation_interval) {
// 		this.setAnimationInterval(animation_interval);
// 	}
// }

// function setup() {
// 	//Generate and display streets and buildings on the map (map_data is defined in map_data.js).
// 	agentmap.buildingify(bounding_box, map_data, {"weight": 1, "opacity": .8}, undefined, units_data);

// 	//Generate 100 agents according to the rules of epidemicAgentMaker, displaying them as blue, .5 meter radius circles.
// 	agentmap.agentify(100, agentmap.seqUnitAgentMaker);
	
// 	ticks_display.textContent = agentmap.state.ticks;

// 	//Set the animation_interval input element to the default value.
// 	animation_interval_input.value = 5;
	
// 	//Do the following for each agent before starting the simulation.
// 	agentmap.agents.eachLayer(function(agent) {
// 		//Find and move to the center of a random unit on the map.
// 		var random_unit_index = Math.floor(Math.random() * agentmap.units.count()),
// 		random_unit = agentmap.units.getLayers()[random_unit_index],
// 		unit_id = random_unit._leaflet_id,
// 		unit_center = random_unit.getCenter();

// 		agent.scheduleTrip(unit_center, {type: "unit", id: unit_id}, 1);
		
// 		//Find and move to a random, unanchored point in the neighborhood.
// 		var random_lat = bounding_box[0][0] + Math.random() * -(bounding_box[0][0] - bounding_box[1][0]),
// 		random_lng = bounding_box[0][1] + Math.random() * -(bounding_box[0][1] - bounding_box[1][1]),
// 		random_lat_lng = L.latLng(random_lat, random_lng);

// 		agent.scheduleTrip(random_lat_lng, {type: "unanchored"}, 1);
		
// 		//Find and move to a random street's intersection.
// 		var random_street_index = Math.floor(Math.random() * agentmap.streets.count()),
// 		random_street = agentmap.streets.getLayers()[random_street_index],
// 		street_id = agentmap.streets.getLayerId(random_street),
// 		cross_streets = Object.keys(random_street.intersections),
// 		intersection = random_street.intersections[cross_streets[0]][0][0];

// 		agent.scheduleTrip(intersection, {type: "street", id: street_id}, 2);
		
// 		//Find and move to a random unit door on the same street...
// 		var street_units = agentmap.units.getLayers().filter(function(unit) {
// 			return unit.street_id === street_id ? true : false;
// 		});
		
// 		//...Only if there are any units on the street.
// 		if (street_units.length > 0) {
// 			var new_random_unit_index = Math.floor(Math.random() * street_units.length),
// 			new_random_unit = street_units[new_random_unit_index],
// 			new_unit_id = new_random_unit._leaflet_id,
// 			new_unit_door = agentmap.getUnitDoor(new_unit_id);

// 			agent.scheduleTrip(new_unit_door, {type: "unit", id: new_unit_id}, .5);
			
// 			//Also, move to the door of one of that unit's nextdoor neighbors, if it has any.
			
// 			var neighbor_id = new_random_unit.neighbors[0] || new_random_unit.neighbors[1] || -1;
// 			if (neighbor_id !== -1) {
// 				var neighbor_unit_door = agentmap.getUnitDoor(neighbor_id);
				
// 				agent.scheduleTrip(neighbor_unit_door, {type: "unit", id: neighbor_id}, .4);
// 			}
// 		}

// 		//Define what the agent will do on each tick.
// 		agent.controller = function() {
// 			agent.moveIt();
// 		};
// 	});
// }
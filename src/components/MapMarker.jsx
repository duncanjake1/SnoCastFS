import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Marker, Tooltip } from "react-leaflet";

import { GetCastContext } from "./GetCastContext";

const MapMarker = (props) => {
  const { setCastInfoConditions } = useContext(GetCastContext);

  const history = useHistory();

  function handleClick() {
    // gather info needed for 'getCast' page
		let podcastData = {
      key: props.key,
      date: props.date,
      state: props.state,
      location: props.location,
      primaryActivity: props.primaryActivity,
      killed: props.killed,
      source: props.source,
      title: props.title,
      description: props.description,
      audioURL: props.audioURL,
    }

		// set context provider	
    setCastInfoConditions(podcastData);

		// also store in sessionStorage in case user refreshes page
		sessionStorage.setItem('podcastData', JSON.stringify(podcastData))
    // push user to the 'getCast' route
    history.push("/getCast");
  }

  return (
    <Marker
      position={[props.latitude, props.longitude]}
      eventHandlers={{
        click: () => {
          handleClick();
        },
      }}
    >
      <Tooltip>{props.title}</Tooltip>
    </Marker>
  );
};
export default MapMarker;


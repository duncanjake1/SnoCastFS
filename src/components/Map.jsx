import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'

import './styles/map.css'

const Map = () => {


    const [reportData, setReportData] = useState(false)

    // grab data from db
    const url = '/api/accidents/'

    useEffect(async () => {
        const response = await fetch(url)
            .then(result => result.json())
        setReportData(response)
        console.log(response)
    }, [])

    return (
        <div id="map-container" className="flex-item">
            <h2 style={{ textAlign: 'center', paddingBottom: '7px' }}>Select location to receive report</h2>

            <div id="map">
                <MapContainer center={[40.7607793, -111.8910474]} zoom={3} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {reportData && reportData.map(report =>
                        <Marker
                            position={[report.latitude, report.longitude]}>
                            <Tooltip>
                                {report.summary_description}
                            </Tooltip>
                        </Marker>
                    )}
                </MapContainer>
            </div>

            {/* <div className="map-container">
                <GoogleMap
                    resetBoundsOnResize={true}
                    style={{ maxWidth: '100%', height: '68vh' }}
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >

                    {reportData && reportData.map(report => //data[0] is index for accident reports
                        <MapMarker
                            name={report.Name}
                            date={report.Date}
                            lat={report.Lat}
                            lng={report.Long}
                            description={report.description}
                            pubDate={report.pubDate}
                            color="red"
                        />
                    )}
                </GoogleMap> 
            </div> */}
        </div >
    )
}
export default Map;

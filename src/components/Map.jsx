import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import MapMarker from './MapMarker.jsx'
import axios from 'axios';

import './styles/map.css'

const Map = () => {


    const [reportData, setReportData] = useState(false)

    // grab data from db
    const url = '/api/accidents/'

    useEffect(async () => {
        const response = await axios
            .get(url)
            .then(result => setReportData(result.data))
            .then(console.log(reportData[0]))
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
                        <MapMarker
                            key={report.avalanche_number}
                            latitude={report.latitude}
                            longitude={report.longitude}
                            date={report.date}
                            state={report.state}
                            location={report.location}
                            primaryActicity={report.primary_activity}
                            killed={report.killed}
                            source={report.url}
                            title={report.summary_description}
                            description={report.html}
                            audioURL={report.audio_url} />
                    )}
                </MapContainer>
            </div>
        </div >
    )
}
export default Map;

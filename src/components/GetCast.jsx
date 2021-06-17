import React, { useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import './styles/getCast.css'
import { GetCastContext } from './GetCastContext.jsx'

const GetCast = () => {

    const { castInfoConditions } = useContext(GetCastContext)

    const dataIsPresent = Object.keys(castInfoConditions).length !== 0

    return (
        <div className="content-template single-container">
            <div className="inner-div">
                {dataIsPresent ?
                    <div>
                        <a target="_blank" rel="noreferrer" href={castInfoConditions.source}>
                            <img
                                className="source-logo"
                                src="https://1yiqgbbqm437m2y13wi18x2m-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/favicon.png"
                                alt="avalanche.org logo"
                                title="Check out the information on avalanche.org" />
                        </a>
                        <h2>{castInfoConditions.title}</h2>
                        <h3>{castInfoConditions.state}</h3>
                        <a target="_blank" rel="noreferrer" href={castInfoConditions.source}>
                            read more...
                        </a>
                        <br />
                        <div id="audio-div">
                            <h4>Play Me</h4>
                            <ReactAudioPlayer
                                src={castInfoConditions.audioURL}
                                controls />
                        </div>
                    </div>
                    :
                    <p>Go to the homepage and click on a pin to generate an audio report!</p>
                }
            </div>
        </div>
    )
}
export default GetCast
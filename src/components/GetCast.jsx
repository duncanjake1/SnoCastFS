import React, { useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import './styles/getCast.css'
import testAudio from './testDatas/testAudio.mp3'
import { GetCastContext } from './GetCastContext.jsx'

const GetCast = () => {

    const { castInfoConditions } = useContext(GetCastContext)

    return (
        <div className="content-template single-container">
            <div className="report-header">
                <img className="source-logo" src={castInfoConditions.imgUrl} alt="company logo" />
                <h2>Title: {castInfoConditions.title}</h2>
                <p>Source: {castInfoConditions.source}</p>
            </div>
            <div className="audio-div">
                <p>play me!</p>
                <ReactAudioPlayer
                    src={castInfoConditions.audioURL}
                    controls
                />
            </div>
            <a target="_blank" rel="noreferrer" href={castInfoConditions.source}>
                read more...
            </a>
        </div>
    )
}
export default GetCast
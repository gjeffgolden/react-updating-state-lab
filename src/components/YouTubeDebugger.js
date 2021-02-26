import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    fixBitrate = () => {
        this.setState({settings: {...this.state.settings, bitrate: 12}})
    }

    changeResolution = () => {
        this.setState({settings: {...this.state.settings, video: {resolution: '720p'}}})
    }


    render() {
        return (
            <div>
                <button onClick={this.fixBitrate} className="bitrate">{this.state.settings.bitrate}</button>
                <button onClick={this.changeResolution} className="resolution">{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}


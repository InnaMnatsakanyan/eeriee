import LandingScreenModel from "./LandingScreenModel";
import {ApiService} from "../../../data/service/ApiService";
import {TrackInfoUIMapper} from "./mapper/TrackInfoUIMapper";
import TrackInfoCellView from "./TrackInfoCellView";
import DoDrawBottomFixedPlayer from "./components/bottom-fixed-player/bottom-fixed-player";
import coverPhoto from '../../../assets/images/ahCover.jpeg'

export default function LandingScreen() {
    const details = {cover:coverPhoto,name:'after hours',artist:'the weeknd',trackDuration:'3.25',}
    const uiTrackInfoMapper = new TrackInfoUIMapper()
    const { state, onSearchClick, onTrackSearchTextChange, onArtistSearchTextChange } = LandingScreenModel(new ApiService(), uiTrackInfoMapper)
    const trackState = state.trackData

    return (
        <div className='weatherScreenStyle'>
            <input className='artistNameInput' type="text" placeholder='Artist name'
                   value={state.artist}
                   onChange={onArtistSearchTextChange}
            />
            <input className='trackNameInput' type="text" placeholder='Song name'
                   value={state.track}
                   onChange={onTrackSearchTextChange}
            />
            <button className='searchButton' onClick={onSearchClick}>Search</button>

        <div>
            <DoDrawBottomFixedPlayer details={details}/>
        </div>

            <div className='weatherAllData'>
                {trackState ?
                    <TrackInfoCellView
                        name={trackState.name}
                        duration={trackState.duration}
                    /> : (
                        <p>No data available</p>
                    )}
            </div>
        </div>
    )
}

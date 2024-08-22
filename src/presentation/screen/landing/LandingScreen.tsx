import React from 'react';
import Header from "../../components/Header";
import LandingScreenModel from "./LandingScreenModel";
import { ApiService } from "../../../data/service/ApiService";
import { TopArtistUIMapper } from "../screenMappers/TopArtistUIMapper";
import styles from './LandingScreen.module.css';
import TopArtistCellView from "./TopArtistCellView";
import TopTracksCellView from "./TopTracksCellView";
import { TopTracksUIMapper } from "../screenMappers/TopTracksUIMapper";
// import DoDrawBottomFixedPlayer from './components/bottom-fixed-player/bottom-fixed-player';
import coverPhoto from '../../../assets/images/ahCover.jpeg'
import covers from '../../../assets/images/afterHoursDelux.jpeg'
import DoDrawArtistDiscography from './components/Artist Discography Component/artistDischography';
// const details ={name:'After hours',artist:"The weeknd",cover:coverPhoto,duration:'4:48'}
const trackList = [
    'Alone Again',
    'Too Late',
    'Hardets To Love',
    'Scared To live',
    'Snowchild',
    'Escape From LA',
    'Heartless',
    'Faith',
    'Blinding Lights',
    'In Your Eyes',
    'Save Your Tears',
    'Repeat After Me (Interlude)',
    'After Hours',
    'Until I Bleed Out'
]
const discCov = [
    coverPhoto, coverPhoto, coverPhoto, coverPhoto, coverPhoto, coverPhoto,
    coverPhoto, coverPhoto, coverPhoto]
const aboutArtist = "The famous Canadian singer started his path back in early 2010 with his first mixtape called ‘House Of Balloons’. Nobody could expect that with that mixtape Abel would invent new genre as his fans loves to call it ‘Dark R & B’. After all this years Abel become one of most successful artists of ourgeneration.He’s also first artist to ever reach100 m streams in one monthThe famous Canadian singer started his path back in early 2010 with his first mixtape called ‘House Of Balloons’. Nobody could expect that with that mixtape Abel would invent new genre as his fans loves to call it ‘Dark R & B’. After all this years Abel become one of most successful artists of ourgeneration.He’s also first artist to ever reach100 m streams in one monthThe famous Canadian singer started his path back in early 2010 with his first mixtape called ‘House Of Balloons’. Nobody could expect that with that mixtape Abel would invent new genre as his fans loves to call it ‘Dark R & B’. After all this years Abel become one of most successful artists of ourgeneration.He’s also first artist to ever reach100 m streams in one month "

const discographyDetails = { discCov, name: "The Weeknd", birthDate: '   Born February 16, 1990,Toronto, Ontario, Canada', about: aboutArtist }

const albumDetails = { name: 'After Hours', issueYear: '2020', tracks: trackList, cover: covers }
export default function LandingScreen() {
    const uiTopTracksMapper = new TopTracksUIMapper();
    const uiTopArtistMapper = new TopArtistUIMapper();

    const { state, onTrackSearchTextChange, onTrackSearchClick, onKeyPress } = LandingScreenModel(new ApiService(), uiTopArtistMapper, uiTopTracksMapper);

    const topTracksState = state.topTracksData;
    const topArtistState = state.topArtistData;

    console.log(state.topTracksData?.tracks[2].name)
    console.log(state.topArtistData?.name.toString())

    return (
        <div>
            <Header
                onTrackSearchClick={onTrackSearchClick}
                onTrackSearchTextChange={onTrackSearchTextChange}
                onKeyPress={onKeyPress}
            />

            <div className={styles.topPickCells}>
                <div className={styles.topPickCellsIn}>
                    {topArtistState ?
                        <TopArtistCellView
                            name={topArtistState.name}
                            image={topArtistState.image}
                        /> : null
                    }
                </div>
            </div>

            <div className={styles.similarTracksComponent}>
                {topTracksState ?
                    <p className={styles.resultText}>Trending Now</p>
                    : null
                }
                <div className={styles.similarTracksTotal}>
                    {topTracksState ? topTracksState.tracks.slice(0, 20).map((track, index) => (
                        <TopTracksCellView
                            key={track.mbid || index}
                            name={track.name}
                            artist={track.artist.name}
                            mbid={track.mbid}
                            duration={track.duration}
                        />
                    )) : null
                    }
                </div>
                {/* <DoDrawBottomFixedPlayer details={details}/> */}
                <DoDrawArtistDiscography details={discographyDetails} />
            </div>
        </div>
    );
}

import React from 'react';
import Header from "../../components/Header";
import LandingScreenModel from "./LandingScreenModel";
import { ApiService } from "../../../data/service/ApiService";
import { TopArtistUIMapper } from "../mappers/TopArtistUIMapper";
import styles from './LandingScreen.module.css';
import TopArtistCellView from "./TopArtistCellView";
import TopTracksCellView from "./TopTracksCellView";
import {TopTracksUIMapper} from "../mappers/TopTracksUIMapper";
import coverPhoto from '../../../assets/images/ahCover.jpeg'


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
            </div>
        </div>
    );
}
import {LandingUITopTracksCell} from "../landing/model/LandingUITopTrackCell";
import {TopTracksData} from "../../../../client/src/data/model/TopTracksData";

export class TopTracksUIMapper {
    toUITopTracksCell(data: TopTracksData) : LandingUITopTracksCell {
        return {
            tracks: data.tracks.track
        } as LandingUITopTracksCell;
    }
}
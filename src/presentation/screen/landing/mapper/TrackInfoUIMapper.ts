import {ArtistTrackData} from "../../../../data/model/ArtistTrackData";
import {LandingUITrackInfoCell} from "../model/LandingUITrackInfoCell";

export class TrackInfoUIMapper {
    toUITrackCell(data: ArtistTrackData) : LandingUITrackInfoCell {
        return {
            name: data.track.name,
            duration: data.track.duration,
        } as LandingUITrackInfoCell;
    }
}
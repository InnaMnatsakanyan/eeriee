import {SearchUISimilarTrackCell} from "../search/model/SearchUISimilarTrackCell";
import {Track} from "../../../data/model/TracksData";

export class SimilarTracksUIMapper {
    public mapTracksData = (data: Track[]): SearchUISimilarTrackCell => {
        return {
            similarTracks: data
            // album_id: data.album_id,
            // album_image: data.album_image,
            // album_name: data.album_name,
            // artist_id: data.artist_id,
            // artist_idstr: data.artist_idstr,
            // artist_name: data.artist_name,
            // audio: data.audio,
            // audiodownload: data.audiodownload,
            // audiodownload_allowed: data.audiodownload_allowed,
            // duration: data.duration,
            // id: data.id,
            // image: data.image,
            // license_ccurl: data.license_ccurl,
            // name: data.name,
            // position: data.position,
            // prourl: data.prourl,
            // releasedate: data.releasedate,
            // shareurl: data.shareurl,
            // shorturl: data.shorturl,
            // waveform: data.waveform
        }
    }

    // toUISimilarTrackCell(data: TracksData) : SearchUISimilarTrackCell {
    //     return {
    //         tracks: data.results.trackmatches.track
    //     } as SearchUISimilarTrackCell;
    // }
}

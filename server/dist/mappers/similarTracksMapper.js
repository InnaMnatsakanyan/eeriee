"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSimilarTracks = void 0;
const mapSimilarTracks = (track) => {
    return {
        id: track.id,
        name: track.name,
        duration: track.duration,
        artist_id: track.artist_id,
        artist_name: track.artist_name,
        artist_idstr: track.artist_idstr,
        album_name: track.album_name,
        album_id: track.album_id,
        license_ccurl: track.license_ccurl,
        position: track.position,
        releasedate: track.releasedate,
        album_image: track.album_image,
        audio: track.audio,
        audiodownload: track.audiodownload,
        prourl: track.prourl,
        shorturl: track.shorturl,
        shareurl: track.shareurl,
        waveform: track.waveform,
        image: track.image,
        audiodownload_allowed: track.audiodownload_allowed,
    };
};
exports.mapSimilarTracks = mapSimilarTracks;

export interface SearchUISimilarTrackCell {
    readonly similarTracks: Track[]
}

export interface Track {
    readonly id: string
    readonly name: string
    readonly duration?: number
    readonly artist_id?: string
    readonly artist_name?: string
    readonly artist_idstr?: string
    readonly album_name: string
    readonly album_id: string
    readonly license_ccurl: string
    readonly position: number
    readonly releasedate: string
    readonly album_image: string
    readonly audio: string
    readonly audiodownload: string
    readonly prourl: string
    readonly shorturl: string
    readonly shareurl: string
    readonly waveform: string
    readonly image: string
    readonly audiodownload_allowed: boolean
}
export interface SimilarTracks {
    readonly headers: Headers
    readonly results: Track[]
}

export interface Headers {
    readonly status: string
    readonly code: number
    readonly error_message: string
    readonly warnings: string
    readonly results_count: number
    readonly next: string
}

export interface Track {
    readonly id: string
    readonly name: string
    readonly duration: number
    readonly artist_id: string
    readonly artist_name: string
    readonly artist_idstr: string
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

export interface TracksData {
    results: Results
}

export interface Results {
    "opensearch:Query": OpensearchQuery
    "opensearch:totalResults": string
    "opensearch:startIndex": string
    "opensearch:itemsPerPage": string
    trackmatches: Trackmatches
    "@attr": Attr
}

export interface OpensearchQuery {
    "#text": string
    role: string
    startPage: string
}

export interface Trackmatches {
    track: Track[]
}

export interface Track {
    name: string
    artist: string
    url: string
    duration: string
    streamable: string
    listeners: string
    image: Image[]
    mbid: string
}

export interface Image {
    "#text": string
    size: string
}

export interface Attr {}

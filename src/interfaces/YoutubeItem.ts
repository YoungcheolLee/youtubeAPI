export interface YoutubeItem {
    etag : string;
    id: {
        kind: string;
        videoId: string;
    };
    snippet: {
        title: string;
    };
}
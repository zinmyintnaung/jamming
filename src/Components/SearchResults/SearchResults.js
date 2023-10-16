import React, { useState, useEffect } from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

export default function SearchResults({ searchResults, onAddPlaylist }) {
    const [result, setResult] = useState([]);

    useEffect(
        function () {
            const tracks = searchResults?.map((track) => ({
                id: track.id,
                song: track.name,
                album: track.album.name,
                artist: track.artists[0].name,
                releasedDate: track.album.release_date,
            }));

            setResult(tracks);
        },
        [searchResults]
    );
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={result} onAddPlaylist={onAddPlaylist} />
        </div>
    );
}

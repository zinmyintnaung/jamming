import "./Playlist.css";
import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";

export default function Playlist({ playlist, onRemovePlaylist }) {
    const [title, setTitle] = useState("Enter Playlist Title");
    return (
        <div className="Playlist">
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <TrackList
                tracks={playlist}
                isPlayList={true}
                onRemovePlaylist={onRemovePlaylist}
            />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

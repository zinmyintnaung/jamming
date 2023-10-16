import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList({
    tracks,
    onAddPlaylist,
    isPlayList,
    onRemovePlaylist,
}) {
    return (
        <ul className="list">
            {tracks?.map((track) => (
                <Track
                    key={track.id}
                    id={track.id}
                    song={track.song}
                    album={track.album}
                    artist={track.artist}
                    releasedDate={track.releasedDate}
                    onAddPlaylist={onAddPlaylist}
                    isPlayList={isPlayList}
                    onRemovePlaylist={onRemovePlaylist}
                />
            ))}
        </ul>
    );
}

import "./Track.css";

export default function Track({
    id,
    song,
    album,
    artist,
    releasedDate,
    onAddPlaylist,
    isPlayList,
    onRemovePlaylist,
}) {
    function handleAddButton() {
        onAddPlaylist({
            id: id,
            song: song,
            album: album,
            artist: artist,
            releasedDate: releasedDate,
        });
    }
    function handleRemoveButton(id) {
        onRemovePlaylist(id);
    }
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{song}</h3>
                <p>
                    {album} ({artist}) | {releasedDate}
                </p>
            </div>
            {isPlayList ? (
                <button
                    className="Track-action"
                    onClick={() => handleRemoveButton(id)}
                >
                    -
                </button>
            ) : (
                <button className="Track-action" onClick={handleAddButton}>
                    +
                </button>
            )}
        </div>
    );
}

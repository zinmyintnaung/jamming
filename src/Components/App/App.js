import { useState, useEffect } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import { useLocalStorageState } from "./useLocalStorageState";
import "./App.css";

//const clientID = "0c44643ff4254de5bf846b45aaa6b1eb";
//const clientSecrect = "192fc8eb65e4469cbd5db8abc87822ec";

function App() {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playlist, setPlaylist] = useLocalStorageState([], "playlist");
    const token =
        "BQAYTPLo4or0BuD8auL596hnjGorvEjTbRHW2jU5w3zQWQ_ov4_oEsJcYPscps7HD8RMLH-l8I5II64_sqEV5aP1h0us_Bu2R8_kA8anTCw-skPmAFA";

    const handleAddPlaylist = (song) => {
        const uniquePlaylist = [
            ...playlist.filter((ele) => ele.id !== song.id),
            song,
        ];
        setPlaylist(uniquePlaylist);
    };

    function handleRemovePlaylist(id) {
        setPlaylist((playlist) => playlist.filter((ele) => ele.id !== id));
    }

    return (
        <div>
            <h1>
                Ja<span className="highlight">mmm</span>ing
            </h1>
            <div className="App">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    onSearch={setSearchResults}
                    accessToken={token}
                />
                <div className="App-playlist">
                    <SearchResults
                        searchResults={searchResults}
                        onAddPlaylist={handleAddPlaylist}
                    />
                    <Playlist
                        playlist={playlist}
                        onRemovePlaylist={handleRemovePlaylist}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

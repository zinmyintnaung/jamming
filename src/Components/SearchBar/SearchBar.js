import "./SearchBar.css";
import { useEffect, useState } from "react";

export default function SearchBar({ query, setQuery, onSearch, accessToken }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    function handleSearch() {
        setSearchQuery(query);
    }

    useEffect(
        function () {
            async function fetchResults() {
                try {
                    setIsLoading(true);
                    setError("");

                    const res = await fetch(
                        `https://api.spotify.com/v1/search?type=track&q=${searchQuery}`,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        }
                    );
                    if (res.status === 401) {
                        alert("Token expired");
                    }
                    if (!res.ok) {
                        throw new Error(
                            "Something went wrong, try again later!"
                        );
                    }

                    const data = await res.json();
                    if (data.Response === "False") {
                        throw new Error("Result not found");
                    }
                    onSearch(data.tracks.items);
                    setError("");
                } catch (err) {
                    if (err.name !== "AbortError") {
                        setError((error) => err.message);
                    }
                } finally {
                    setIsLoading(false);
                }
            }

            if (searchQuery.length < 3) {
                onSearch([]);
                setError("");
                return;
            }
            fetchResults();
        },
        [searchQuery, onSearch, accessToken, error]
    );
    return (
        <div className="SearchBar">
            <input
                placeholder="Enter a Song, Album or Artist"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            />
            <button
                className="SearchButton"
                onClick={handleSearch}
                disabled={isLoading}
            >
                SEARCH
            </button>
        </div>
    );
}

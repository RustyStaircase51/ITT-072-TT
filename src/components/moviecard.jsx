import { useState } from "react";

function CardLoader({ movie, onToggleWatched }) {
    return (
        <div className="Card">
            <h3 className={movie.isComplete ? "watched" : "unwatched"}>{movie.name}</h3>
            <p>Release Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>

            <button onClick={() => onToggleWatched(movie.id)}>
                {movie.isComplete
                    ? "Mark Unwatched"
                    : "Mark Watched"}
            </button>
            <br />
        </div>
        
    );
}

export default CardLoader;
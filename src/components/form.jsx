import { useState } from "react";
import CardLoader from "./moviecard.jsx";

function FormLoader({ movies, onAddMovie, onToggleWatched }) {
    function pass_entered_data(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const newMovie = {
            id: Date.now(),
            name: formData.get("movie").trim(),
            year: formData.get("year"),
            genre: formData.get("genre"),
            isComplete: false,
        };

        if (!newMovie.name) return;

        onAddMovie(newMovie);
        event.currentTarget.reset();
    }

    return (
        <>
            <section id="Form">
                <h2>Add a Movie</h2>

                <form onSubmit={pass_entered_data} id="movieForm">
                    <label>
                        Movie:
                        <input
                            id="movie"
                            name="movie"
                            type="text"
                            placeholder="Coraline"
                            required
                        />
                    </label>

                    <br />

                    <label>
                        Year:
                        <input
                            id="year"
                            name="year"
                            type="number"
                            placeholder="2009"
                            required
                        />
                    </label>

                    <br />

                    <label>
                        Genre:
                        <select id="genre" name="genre">
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Crime">Crime</option>
                            <option value="Drama">Drama</option>
                            <option value="Historical">Historical</option>
                            <option value="Horror">Horror</option>
                            <option value="Musical">Musical</option>
                            <option value="Sci-fi">Sci-Fi</option>
                            <option value="War">War</option>
                            <option value="Western">Western</option>
                        </select>
                    </label>

                    <br />

                    <button type="submit">Add Movie</button>
                </form>
            </section>

            <section id="movieDashboard">
                <h2>Movies</h2>

                {movies.map((movie) => (
                    <CardLoader
                        key={movie.id}
                        movie={movie}
                        onToggleWatched={onToggleWatched}
                    />
                ))}
            </section>
        </>
    );
}

export default FormLoader;
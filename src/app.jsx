// app.jsx

import { useState } from "react";
import HeadLoader from "./components/header.jsx";
import FormLoader from "./components/form.jsx";
import FootLoader from "./components/footer.jsx";
import RenderFilter from "./components/renderfilter.jsx";
import CounterLoader from "./components/counter.jsx";
import sortMovies from "./components/filter.jsx";

function AppLoader() {
    const [movies, setMovies] = useState([
		{
			id: 1,
    		name: "It Follows",
    	    year: 2014,
        	genre: "Horror",
        	isComplete: false,
		},
		{
			id: 2,
    		name: "Clueless",
    	    year: 1995,
        	genre: "Comedy",
        	isComplete: true,
		},
		{
			id: 3,
    		name: "The Sound of Music",
    	    year: 1965,
        	genre: "Musical",
        	isComplete: false,
		}
		
	]);
    const [sortType, setSortType] = useState("default");

    // Add a new movie
    function addMovie(newMovie) {
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    }

    // Toggle watched/unwatched status
    function toggleWatched(movieId) {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === movieId
                    ? { ...movie, isComplete: !movie.isComplete }
                    : movie
            )
        );
    }

    // Calculate how many movies are still unwatched
    const unwatchedCount = movies.filter(
        (movie) => !movie.isComplete
    ).length;

    // Get a sorted copy of the movie list
    const sortedMovies = sortMovies(movies, sortType);

    return (
        <>
            <div id="Head">
                <header>
                    <HeadLoader />
                </header>
            </div>

            <main>
				
                <div id="message">
                    <CounterLoader count={unwatchedCount} />
                </div>

                <div id="Filter">
                    <RenderFilter onSortChange={setSortType} />
                </div>
                <FormLoader
                    movies={sortedMovies}
                    onAddMovie={addMovie}
                    onToggleWatched={toggleWatched}
                />
            </main>

            <footer id="Foot">
                <FootLoader />
            </footer>
        </>
    );
}

export default AppLoader;
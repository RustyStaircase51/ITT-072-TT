// filter.jsx
// Sort by genre, name, status, or default order
import { useState } from "react";


function sortMovies(movies, button_sort) {
    const sortedMovies = [...movies];

    if (button_sort === "default") {
        return sortedMovies.sort((a, b) => a.id - b.id);
    }

    else if (button_sort === "genre") {
        return sortedMovies.sort((a, b) =>
            a.genre.localeCompare(b.genre)
        );
    }

    else if (button_sort === "name") {
        return sortedMovies.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    else if (button_sort === "status") {
        return sortedMovies.sort((a, b) =>
            Number(a.isComplete) - Number(b.isComplete)
        );
    }

    return sortedMovies;
}

export default sortMovies;
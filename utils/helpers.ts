import { Media, PageResult } from '~~/types';

export const filterUnreleasedMovies = (movies: PageResult<Media>): PageResult<Media> => {
    const currentDate = new Date();
    const uniqueIds = new Set<string>();
    const filteredResults = movies.results
        .filter((movie) => {
            const releaseDate = new Date(movie.release_date!);
            return releaseDate > currentDate;
        })
        .filter((movie) => {
            if (uniqueIds.has(movie.id)) {
                return false;
            } else {
                uniqueIds.add(movie.id);
                return true;
            }
        });

    return {
        ...movies,
        results: filteredResults,
    };
};









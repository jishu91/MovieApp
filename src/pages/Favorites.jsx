import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Your Favorites</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 py-20">
      <h2 className="text-2xl font-semibold">No Favorite Movies Yet</h2>
      <p className="text-gray-500 max-w-md">
        Start adding movies to your favorites and they will appear here!
      </p>
    </div>
  );
}

export default Favorites;

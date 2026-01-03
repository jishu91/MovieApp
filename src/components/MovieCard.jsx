import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.imdbID);

  function onFavoriteClick(e) {
    e.preventDefault();
    favorite ? removeFromFavorites(movie.imdbID) : addToFavorites(movie);
  }

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Poster */}
      <div className="relative group">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          className="w-full h-[350px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <button
            onClick={onFavoriteClick}
            className={`text-3xl ${
              favorite ? "text-red-500" : "text-white"
            } hover:scale-110 transition`}
          >
            ♥
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-lg line-clamp-1">{movie.Title}</h3>
        <p className="text-sm text-gray-500">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;

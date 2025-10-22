import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: 2,
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Comedy", "Adventure"],
  },
  {
    id: 3,
    title: "Jack Reacher: Never Go Back",
    time: 118,
    genres: ["Action", "Thriller"],
  },
];

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  // fallback for missing movie (optional, helps with bad routes)
  if (!movie) {
    return (
      <div>
        <NavBar />
        <h1>Movie not found</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre) => (
        <span key={genre}>{genre}</span>
      ))}
    </div>
  );
}

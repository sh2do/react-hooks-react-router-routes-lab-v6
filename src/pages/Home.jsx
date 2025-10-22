import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

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

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.time} mins</p>
          <div>
            {movie.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={'/movies/' + movie.id}>
      <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    </Link>
  );
}

export default MovieCard;
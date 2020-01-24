import React from 'react';
import { NavLink, Link} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link exact to={'/movies/' + movie.id} className="saved-movie">{movie.title}</Link>
    ))}
    <div className="home-button">
      <NavLink exact to='/'>Home</NavLink></div>
  </div>
);

export default SavedList;

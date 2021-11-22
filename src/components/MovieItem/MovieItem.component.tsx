import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MovieItemWrapper } from './MovieItem.wrapper';
import { generateimageUrl } from '../../pages/MoviePage/MoviePage.constants';
import { Movie } from '../../redux/movies/movies.types';

interface MovieItemProps {
  movie: Movie,
}

export const MovieItem = ({ movie }: MovieItemProps) => {
  const [isHover, setIsHover] = useState(false);

  const { id, title, poster_path } = movie;

  return (
    <NavLink to={`/movie/${id}`} className="movie">
      <MovieItemWrapper onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <img src={generateimageUrl(poster_path)} alt={title} />
        
        {isHover && 
          <div className="hoverDetails">
            <h3 className="title">{title}</h3>
          </div>
        }
      </MovieItemWrapper>
    </NavLink>
  )
}
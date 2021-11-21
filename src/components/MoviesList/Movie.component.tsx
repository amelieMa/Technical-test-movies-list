import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IMAGE_URL } from '../../app/App.constants';
import { MovieWrapper } from './MoviesList.wrapper';


const generateimageUrl = (image: string) => IMAGE_URL + image;

export const Movie = ({ movie }: any) => {
  const [isHover, setIsHover] = useState(false);

  const {id, title, poster_path} = movie;

  return (
    <NavLink to={`/movie/${id}`} className={`movie`}>
      <MovieWrapper onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <img src={generateimageUrl(poster_path)} alt={title} />
        
        {isHover && 
          <div className="hoverDetails">
            <h3 className="title">{title}</h3>
          </div>
        }
      </MovieWrapper>
    </NavLink>
  )
}
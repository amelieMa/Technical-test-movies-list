import { Row, Col } from 'antd';

import { MoviePageWrapper } from './MoviePage.wrapper';
import { Movie } from '../../redux/movies/movies.types';
import { Empty } from '../../ui/Empty/Empty.component';
import { generateimageUrl } from '../../components/MoviesList/Movie.component';

interface MoviePageComponentProps {
  movie: Movie | null,
  loading: boolean,
}

const errorIcon = <span className="material-icons">broken_image</span>;

export const MoviePageComponent = ({ movie, loading }: MoviePageComponentProps) => {
  if (movie === null || !movie ) {
    return <Empty description={"Oulah ! Il y a un soucis."} image={errorIcon} />;
  }

  const {title, poster_path, overview, vote_average} = movie;

  return (
    <MoviePageWrapper>
      <Row>
        <Col xs={24} sm={24} md={18} className="detailsColumn">
          <h2>{title}</h2>
          <p>{overview}</p>
          <p>{vote_average}/10</p>
        </Col>
        <Col xs={24} sm={24} md={6} className="imageColumn">
          <img src={generateimageUrl(poster_path)} alt={title} />
        </Col>
      </Row>
    </MoviePageWrapper>
  );
}
import { Row, Col } from 'antd';

import { MoviePageWrapper } from './MoviePage.wrapper';
import { generateimageUrl } from './MoviePage.constants';
import { ErrorIcon } from './MoviePage.helpers';
import { Movie } from '../../redux/movies/movies.types';
import { Empty } from '../../ui/Empty/Empty.component';

interface MoviePageComponentProps {
  movie: Movie | null,
}

export const MoviePageComponent = ({ movie }: MoviePageComponentProps) => {
  if (!movie) {
    return <Empty description={"Oulah ! Il y a un soucis."} image={ErrorIcon} />;
  }

  const { title, poster_path, overview, vote_average } = movie;

  return (
    <MoviePageWrapper data-testid="moviePage">
      <Row>
        <Col xs={24} sm={24} md={18} className="detailsColumn">
          <h2>{title}</h2>
          <p>{overview}</p>
          {vote_average && <p>{vote_average}/10</p>}
        </Col>
        <Col xs={24} sm={24} md={6} className="imageColumn">
          <img src={generateimageUrl(poster_path)} alt={title} />
        </Col>
      </Row>
    </MoviePageWrapper>
  );
}
import { useParams } from 'react-router-dom';

export const MoviePageComponent = () => {
  const { id } = useParams();

  return (
    <h2>This movie : {id}</h2>
  );
}
import Clapper from '../assets/clapperboard.jpg';

const Image = ({
  path,
  className,
  size = 300,
}: {
  path: string;
  className?: string;
  size?: number;
}) => {
  const baseUrl = `https://image.tmdb.org/t/p/`;
  const imgSize = `w${size}`;
  const url = `${baseUrl}${imgSize}${path}`;

  return (
    <img
      src={path ? url : Clapper}
      alt={path ? url : Clapper}
      className={className}
    />
  );
};

export default Image;

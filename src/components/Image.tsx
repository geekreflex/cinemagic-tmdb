const Image = ({ path, className }: { path: string; className: string }) => {
  const baseUrl = `https://image.tmdb.org/t/p/`;
  const size = 'w500';

  const url = `${baseUrl}${size}${path}`;

  return <img src={url} alt={url} className={className} />;
};

export default Image;

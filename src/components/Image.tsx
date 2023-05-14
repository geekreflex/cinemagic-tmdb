const Image = ({ path }: { path: string }) => {
  const baseUrl = `https://image.tmdb.org/t/p/`;
  const size = 'w500';

  const url = `${baseUrl}${size}${path}`;

  return (
    <div>
      <img src={url} alt={url} />
    </div>
  );
};

export default Image;

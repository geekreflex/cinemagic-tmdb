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

  return <img src={url} alt={url} className={className} />;
};

export default Image;

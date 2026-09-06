interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: 'person' | 'image' | 'logo';
  objectFit?: 'cover' | 'contain';
}

const Image = ({ src, alt, fallback = 'image', objectFit = 'cover', className = '', ...props }: ImageProps) => {
  const fallbackImages = {
    person: 'https://via.placeholder.com/400x500/6B1025/FFFFFF?text=Person',
    image: 'https://via.placeholder.com/800x600/6B1025/FFFFFF?text=Image',
    logo: 'https://via.placeholder.com/200x200/6B1025/FFFFFF?text=Logo',
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.src = fallbackImages[fallback];
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={`${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`}
      {...props}
    />
  );
};

export default Image;

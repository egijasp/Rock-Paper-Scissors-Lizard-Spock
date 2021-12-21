import { FC } from 'react';

type LogoProps = {
    src: string,
    alt: string
    className: string,
}

const Logo:FC<LogoProps> = ({ src, alt, className }) => (
  <img
    className={className}
    src={src}
    alt={alt}
  />
);

export default Logo;

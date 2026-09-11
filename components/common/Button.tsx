import { type ButtonHTMLAttributes, type FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses =
    'font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center shadow-sm hover:shadow-md';

  const variantClasses = {
    primary: 'bg-maroon text-white hover:bg-maroon-dark',
    secondary: 'bg-gold text-white hover:bg-gold-dark',
    outline: 'border-2 border-maroon text-maroon hover:bg-maroon hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

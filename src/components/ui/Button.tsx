import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-3xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'border border-primary text-white hover:bg-primary/10'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3'
  };
  
  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const iconElement = icon && (
    <span className={`${iconSizeClasses[size]} flex-shrink-0`}>
      {icon}
    </span>
  );
  
  return (
    <button className={classes} {...props}>
      {iconElement}
      <span>{children}</span>
    </button>
  );
};

export default Button;

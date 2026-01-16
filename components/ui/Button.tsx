// Button.tsx
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary' | 'danger' | 'neutral';
  bloom?: boolean;
};

const colorVars: Record<string, { bg: string; text: string; border: string }> = {
  primary: {
    bg: 'bg-primary',
    text: 'text-white',
    border: 'border-primary',
  },
  secondary: {
    bg: 'bg-secondary',
    text: 'text-white',
    border: 'border-secondary',
  },
  danger: {
    bg: 'bg-red-600',
    text: 'text-white',
    border: 'border-red-600',
  },
  neutral: {
    bg: 'bg-gray-600',
    text: 'text-white',
    border: 'border-gray-600',
  },
};

export function Button({
  children,
  className,
  variant = 'contained',
  color = 'primary',
  bloom = false,
  ...props
}: ButtonProps) {
  const colorClass = colorVars[color];

  const baseClasses =
    'rounded-2xl px-6 py-3 font-bold transition-all duration-150 focus:outline-none';

  const bloomClass =
    bloom && variant === 'contained' ? 'shadow-[0_0_8px_2px_rgba(46,191,140,0.25)]' : '';

  let variantClasses = '';
  if (variant === 'outlined') {
    variantClasses = clsx(
      'border',
      colorClass.border,
      'bg-transparent',
      'outlined-bloom-hover',
      'transition-all'
    );
  } else if (variant === 'ghost') {
    variantClasses = clsx(
      'bg-transparent',
      colorClass.text,
      'hover:bg-black/5 dark:hover:bg-white/10'
    );
  } else {
    // contained (default)
    variantClasses = clsx(
      colorClass.bg, // bg-primary: gradient with hover anim handled in CSS
      colorClass.text,
      'border-none'
    );
  }

  return (
    <button
      type="button"
      className={clsx(baseClasses, variantClasses, bloomClass, className)}
      {...props}
    >
      {children}
    </button>
  );
}

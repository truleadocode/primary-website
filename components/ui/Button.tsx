import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-md hover:shadow-lg shadow-primary-500/20',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-md hover:shadow-lg shadow-secondary-500/20',
    gradient: 'gradient-primary text-white hover:shadow-glow focus:ring-primary-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-primary-400 focus:ring-primary-500 bg-white shadow-sm hover:shadow-md hover:text-primary-700',
    ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-primary-500 hover:text-primary-700',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm h-9',
    md: 'px-6 py-3 text-base h-11',
    lg: 'px-8 py-4 text-lg h-14',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      type={props.type || 'button'}
      {...props}
    >
      {children}
    </button>
  )
}


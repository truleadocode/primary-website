import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white',
            'focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500',
            'disabled:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60 disabled:border-neutral-200',
            'transition-all duration-300 text-base',
            'placeholder:text-neutral-400',
            error && 'border-red-500 focus:ring-red-500/30 focus:border-red-500',
            !error && 'hover:border-neutral-300',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 font-medium animate-fade-in">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'


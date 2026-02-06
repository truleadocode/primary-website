'use client'

import { SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full px-4 py-3 border-2 border-neutral-200 rounded-xl',
            'focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500',
            'disabled:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60',
            'transition-all duration-300',
            'bg-white text-base',
            'cursor-pointer',
            error && 'border-red-500 focus:ring-red-500/30 focus:border-red-500',
            !error && 'hover:border-neutral-300',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-2 text-sm text-red-600 font-medium animate-fade-in">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'














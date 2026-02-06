'use client'

import { cn } from '@/lib/utils'

interface ToggleSwitchProps {
  value: 'brands' | 'influencers'
  onChange: (value: 'brands' | 'influencers') => void
  className?: string
}

export function ToggleSwitch({ value, onChange, className }: ToggleSwitchProps) {
  return (
    <div className={cn('inline-flex items-center bg-white/90 backdrop-blur-xl rounded-full border-2 border-neutral-200/50 p-1.5 shadow-lg', className)}>
      <button
        onClick={() => onChange('brands')}
        className={cn(
          'px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ease-out',
          value === 'brands'
            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
            : 'text-neutral-600 hover:text-neutral-900'
        )}
      >
        For Brands
      </button>
      <button
        onClick={() => onChange('influencers')}
        className={cn(
          'px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ease-out',
          value === 'influencers'
            ? 'bg-gradient-to-r from-secondary-600 to-secondary-700 text-white shadow-md'
            : 'text-neutral-600 hover:text-neutral-900'
        )}
      >
        For Influencers
      </button>
    </div>
  )
}











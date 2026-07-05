import { cn } from '@/lib/utils/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'default' | 'primary'
  className?: string
}

export function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span className={cn('badge', variant === 'primary' && 'badge-primary', className)} {...props}>
      {children}
    </span>
  )
}
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl overflow-hidden transition-all duration-300",
        hoverEffect && "hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:border-primary/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

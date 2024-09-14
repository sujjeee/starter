import React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface ShellHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title?: string
}

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: ShellHeaderProps
}

const ShellHeader = React.forwardRef<HTMLDivElement, ShellHeaderProps>(
  ({ className, icon, title, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-1.5 border-b px-3 py-2.5 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {icon}
      {title && <span>{title}</span>}
    </div>
  )
)

ShellHeader.displayName = "ShellHeader"

export const Shell = React.forwardRef<HTMLDivElement, ShellProps>(
  ({ className, header, children, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn("p-0 rounded-2xl overflow-hidden", className)}
      {...props}
    >
      {header && <ShellHeader {...header} />}
      {children}
    </Card>
  )
)

Shell.displayName = "Shell"
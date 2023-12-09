import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Beta software. Lux AI may display inaccurate info or hallucinate. Copyright 2023{' '}
      <ExternalLink href="https://lux.partners">
        Lux Partners Limited
      </ExternalLink>
      .
    </p>
  )
}

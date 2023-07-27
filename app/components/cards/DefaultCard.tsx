import React from 'react'
import { DefaultCardProps } from '../../utils/types'

function DefaultCard({ children, className }: DefaultCardProps) {
  return (
    <div className={`w-full p-6 bg-cardBgColor rounded-lg ${className ?? ''}`}>{children}</div>
  )
}

export default DefaultCard
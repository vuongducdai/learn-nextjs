import * as React from 'react'
import Link from 'next/link'
import { LayoutProps } from '@/models/index'

export function EmptyLayout(props: LayoutProps) {
  return <div>{props.children}</div>
}

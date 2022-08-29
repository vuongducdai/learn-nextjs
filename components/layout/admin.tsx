import * as React from 'react'
import Link from 'next/link'
import { LayoutProps } from 'models'

export function AdminLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <h1>Side bar</h1>
      <Link href="/home">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{props.children}</div>
    </div>
  )
}

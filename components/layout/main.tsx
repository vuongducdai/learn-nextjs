import * as React from 'react'
import Link from 'next/link'
import { LayoutProps } from 'models'

export function MainLayout(props: LayoutProps) {
  React.useEffect(() => {
    console.log('MainLayout mounting')

    return () => {
      console.log('MainLayout unmounting')
    }
  }, [])

  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{props.children}</div>
    </div>
  )
}

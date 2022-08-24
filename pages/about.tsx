import * as React from 'react'
import { useRouter } from 'next/router'
// import Header from '@/components/common/header' //server side rendering
import dynamic from 'next/dynamic'
import { MainLayout } from '@/components/layout'

const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter()
  console.log('About query: ', router.query)

  return (
    <div>
      <h1>About Page</h1>
      <Header />
    </div>
  )
}

AboutPage.Layout = MainLayout

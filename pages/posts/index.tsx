import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import * as React from 'react'

export interface PostsPageProps {
  posts: any[]
}

export default function Posts(props: PostsPageProps) {
  // console.log(props.posts)
  return (
    <div>
      <h1>Posts List Page</h1>
      <ul>
        {props.posts.map((item, index) => (
          <li key={index}>
            <Link href={`/posts/${item.id}`}>
              <a>
                {item.title} {item.author}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async (
  context: GetStaticPropsContext
) => {
  //server side
  //build time

  const raw = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const jsonData = await raw.json()
  return {
    props: {
      posts: jsonData.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        author: item.author,
      })),
    },
  }
}

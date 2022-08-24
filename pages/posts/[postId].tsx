import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import { PostsPageProps } from '.'

export interface PostPageProps {
  post: any
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\n GET STATIC PATHS')

  const rawData = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await rawData.json()

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('\n GET STATIC PROPS', context.params?.postId)
  //server side
  //build time
  const postId = context.params?.postId
  if (!postId) return { notFound: true }

  const raw = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const jsonData = await raw.json()

  return {
    props: {
      post: { title: jsonData.title, author: jsonData.author },
    },
  }
}

import { InferGetStaticPropsType } from 'next';
import Head from 'next/head'
import { getPostList } from '@shared/util';
import Header from '@components/header/index'
import Navigation from '@components/navigation'

type PostList = string[]

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Next Website</title>
      </Head>
      <main>
        <Navigation />
        <Header />
        {posts.lenght > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                {slug.replaceAll('-', ' ')}
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const posts:PostList = getPostList()

  return
  {
    props: { posts }
  }

}
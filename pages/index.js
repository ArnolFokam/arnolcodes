import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { SITE_TITLE, SITE_DESCRIPTION } from '../constants/site'

export default function Home() {
  return (
    <div>
      <Head>
      </Head>
      <NextSeo
          title={SITE_TITLE}
          description={SITE_DESCRIPTION}
          openGraph={{
            url: process.env.NEXT_PUBLIC_SITE_URL,
            title: SITE_TITLE,
            description: SITE_DESCRIPTION
          }}
        />
      <p>Home</p>
    </div>
  )
}

import Head from 'next/head'
import { NextSeo } from 'next-seo'

export default function NotFound() {
    return (
      <div>
        <NextSeo title='Page Not Found' description={process.env.description}/>
        <p>404</p>
      </div>
    )
  }
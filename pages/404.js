import Head from 'next/head'

export default function NotFound() {
    return (
      <div>
        <Head>
          <title>Page Not Found</title>
          <meta name="title" content="Page Not Found" />
          <meta 
          name="description" 
          content={process.env.description} />
        </Head>
        <p>404</p>
      </div>
    )
  }
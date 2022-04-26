import Head from 'next/head'

interface iprops {
    title: string
}

export const HeadPage = ({ title }: iprops): JSX.Element =>{
  return (
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
  )
}

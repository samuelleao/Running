import Head from "next/head";

interface iprops {
  title: string;
}

export const HeadPage = ({ title }: iprops): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      ></link>
       <meta name="description" content="Dribble Redesign"></meta>
    </Head>
  );
};

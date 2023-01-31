import React, { FC } from "react";
import Head from "next/head";

interface Props {
  title: string;
}
const PageHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Geektrust frontend challenge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;

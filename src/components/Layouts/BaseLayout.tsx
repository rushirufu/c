import React from "react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from "next/head";

interface Props {
  titulo?: string;
  children: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({ children, titulo }) => {
  return (
    <>
      <Head>
        <title>{titulo || "TITULOOOO"}</title>
        <meta name="author" content="asdasd" />
        <meta name="description" content="agasdf" />
        <meta name="keywords" content="agasdf,sdfgdfg" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
